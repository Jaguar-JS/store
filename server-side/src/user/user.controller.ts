import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Put, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { UpdateUserAdminDto } from './dto/update-user-admin.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Auth } from '../auth/decorators/auth.decorator'
import { User } from './decorators/user.decorator'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {
	}
	// Search Users for searchTerm -admin
	@Get()
	@Auth('ADMIN')
	async getUsers(@Query('searchTerm') searchTerm?: string) {
		return this.userService.getAll(searchTerm)
	}

	// // Count users -admin
	@Get('count/')
	@Auth('ADMIN')
	async getCountUsers() {
		return this.userService.getCount()
	}

	// View profile User
	@Get('profile/')
	@Auth()
	async getProfile(@User('email') email: string) {//: Promise<UserModel>
		return this.userService.byId({ email: email })
	}

	// Update profile User
	@Put('profile/')
	@HttpCode(200)
	@Auth()
	async updateProfile(@User('id') id: number, @Body() data: UpdateUserDto) {
		return this.userService.updateProfile({
			where: { id: id },
			data: data
		})
	}

	// View favorites User
	@Get('profile/favorites')
	@Auth()
	async getFavorites(@User('id') id: number) {
		return this.userService.getFavoriteProducts({ id: id })
	}

	// Update favorites User
	@Put('profile/favorites')
	@HttpCode(200)
	@Auth()
	async toggleFavorite(@User('id') id: number, @Body('productId') productId: number) {
		console.log('toggleFavorite')
		return this.userService.toggleFavorite({ id: id }, productId)
	}

	// Search User for ID -admin
	@Get(':id')
	@Auth('ADMIN')
	async findOne(@Param('id') id: number) {
		const doc = await this.userService.byId({ id: id })
		if (!doc) throw new NotFoundException('User not found!')
		return doc
	}

	// Update profile any User by ID -admin
	@Put(':id')
	@HttpCode(200)
	@Auth('ADMIN')
	async updateUser(@Param('id') id: number, @Body() data: UpdateUserAdminDto) {
		return this.userService.updateProfile({
			where: { id: id },
			data: data
		})
	}

	// Update Role any User by ID -admin
	@Put('role/:id')
	@HttpCode(200)
	@Auth('ADMIN')
	async updateRole(@Param('id') id: number, @Body() data: UpdateUserDto) {
		return this.userService.updateProfile({
			where: { id: id },
			data: {
				...data,
				role: 'ADMIN'
			}
		})
	}

	// Remove User by ID -admin
	@Delete(':id')
	@HttpCode(200)
	@Auth('ADMIN')
	deleteUser(@Param('id') id: number) {
		return this.userService.delete({ id: id })
	}
}
