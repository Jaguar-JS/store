import { Injectable, NotFoundException } from '@nestjs/common'
// import { UpdateUserDto } from './dto/update-user.dto'
import { Prisma, User } from '@prisma/client'
import { hash } from 'argon2'
import { PrismaService } from '../prisma.service'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {
	}


	async getAll(searchTerm?: string) {// : Promise<User[] | null>
		return this.prisma.user.findMany(
			searchTerm
				? {
					where: {
						OR: [
							{
								login: {
									contains: searchTerm
								}
							},
							{
								email: {
									contains: searchTerm.toLowerCase()}
							}
						]
					},
					// select: {
					// 	role: true,
					// 	login: true,
					// 	surname: true,
					// 	email: true,
					// 	favorites:true,
					// 	createdAt:true
					// },
					include: {
						reviews: true
					},
					orderBy: {
						createdAt: 'desc'
					}
				}
				: undefined
		)
	}

	async byId(
		where: Prisma.UserWhereUniqueInput)//: Promise<User | null>
	{
		return this.prisma.user.findUnique({
			where: where,
			// select: {
			// 	login: true,
			// 	email: true,
			// 	role: true,
			// },
			include: {
				favorites: {
					select: {
						id: true
					}
				}
			}
		})
	}

	async updateProfile(params: {
		where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput }): Promise<User | null>
	{
		const { where, data } = params
		const user = await this.byId(where)

		const isSameUser = await this.prisma.user.findUnique({
			where: {
				email: data.email as string
			}
		})

		if (isSameUser && where.id !== isSameUser.id) {
			throw new NotFoundException('Email busy')
		}
		if (user) {
			data.password = await hash(data.password as string)
			if (user.role === 'CLIENT') {
				delete data.isAdmin
				delete data.email
			}

			return this.prisma.user.update({
				data,
				where
			})
		}
		throw new NotFoundException('User not found')
	}

	async getFavoriteProducts(where: Prisma.UserWhereUniqueInput) {
		return this.prisma.user.findUnique({
			where,
			include: {
				favorites: {
					select: {
						id: true,
						name: true,
						description: true,
						price: true,
						images: true,
						countOpened: true,
						isSendTelegram: true,
						reviews: true
					}
				}
			}
		}).then((data) => {
			return data.favorites
		})
	}

	async toggleFavorite(where: Prisma.UserWhereUniqueInput, productId: number) {
		const user = await this.byId(where)
		const { favorites } = user

		const objFavorite = {}
		// console.log(favorites.some(obj => obj.id === productId))
		if (favorites.some(obj => obj.id === productId)) {
			objFavorite['disconnect'] = { id: productId }
		} else {
			objFavorite['connect'] = { id: productId }
		}

		await this.prisma.user.update({
			where,
			data: { favorites: objFavorite }

		})
	}

	async getCount(): Promise<number> {
		return this.prisma.user.count()
	}

	async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
		return this.prisma.user.delete({
			where
		})
	}
}

//
// async getAll(params: {
//   skip?: number;
//   take?: number;
//   cursor?: Prisma.UserWhereUniqueInput;
//   where?: Prisma.UserWhereInput;
//   orderBy?: Prisma.UserOrderByWithRelationInput;
// }): Promise<User[]> {
//   const { skip, take, cursor, where, orderBy } = params;
//   return this.prisma.user.findMany({
//     skip,
//     take,
//     cursor,
//     where,
//     orderBy,
//   });
// }
