import { IsEmail, IsString, MinLength } from 'class-validator'

export class UpdateUserDto {

	@IsEmail()
	email: string

	@MinLength(6, { message: 'Password cannot be less than 6 characters' })
	@IsString()
	password: string

	@IsString()
	avatarPath?: string

	@IsString()
	name?: string

}
