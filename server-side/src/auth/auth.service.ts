import {
	BadRequestException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { User as UserModel } from '@prisma/client'
import { AuthDto } from './dto/auth.dto'
import { JwtService } from '@nestjs/jwt'
import { hash, verify } from 'argon2'
import { RefreshTokenDto } from './dto/refresh-token.dto'
import { ITokensAuth } from './auth.interface'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwtService: JwtService
	) {}

	//Login
	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)
		const tokens = await this.issueTokenPair(user.id, user.email)
		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	//Registration
	async register({ email, password }: AuthDto) {
		const oldUser = this.findByEmail(email)
		// console.log(oldUser)
		if (!oldUser) {
			throw new BadRequestException(
				'User with this email is already in the system'
			)
		}
		const hashedPassword = await hash(password)
		const newUser = await this.prisma.user.create({
			data: {
				email,
				password: hashedPassword
			}
		})

		const tokens = await this.issueTokenPair(newUser.id, newUser.email)
		return {
			user: this.returnUserFields(newUser),
			...tokens
		}
	}

	//метод валидиции данных юзера
	async validateUser({ email, password }: AuthDto): Promise<UserModel> {
		const user = await this.findByEmail(email)
		if (!user) throw new UnauthorizedException('User not found')

		const isValidPassword = await verify(user.password, password)

		if (!isValidPassword)
			throw new UnauthorizedException('Invalid password')
		return user
	}

	// Метод генерации новой пары токенов по старому рефреш-токену
	async getNewTokens({ refreshToken }: RefreshTokenDto) {
		if (!refreshToken) throw new UnauthorizedException('Please sign in!')

		const result = await this.jwtService.verifyAsync(refreshToken)
		if (!result)
			throw new UnauthorizedException('Invalid token or expired!')

		const user = await this.findByEmail(result.email)
		const tokens = await this.issueTokenPair(user.id, user.email)

		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	//функция записи данных в токен
	async issueTokenPair(userId: number, userEmail: string):Promise<ITokensAuth> {
		const data = { id: userId, email: userEmail }
		console.log(data)
		const refreshToken = await this.jwtService.signAsync(data, {
			expiresIn: '15d'
		})
		const accessToken = await this.jwtService.signAsync(data, {
			expiresIn: process.env.EXPIRES_IN
		})
		return { refreshToken, accessToken }
	}

	// Search for a user by email
	async findByEmail(email: string) {
		return await this.prisma.user.findUnique({
			where: {
				email: email
			}
		})
	}

	// метод возвращает поля юзера
	returnUserFields(user: UserModel) {
		return {
			id: user.id,
			email: user.email,
			isAdmin: user.isAdmin,
			createdAt: user.createdAt
		}
	}
}
