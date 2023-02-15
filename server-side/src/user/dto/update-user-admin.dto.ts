import { IsBoolean, IsEmail, IsString, MinLength } from 'class-validator'
import { TypeRole } from '../../auth/auth.interface'

export class UpdateUserAdminDto {
	@IsEmail()
	email: string

	@MinLength(6, { message: 'Password cannot be less than 6 characters' })
	@IsString()
	password: string

	@IsBoolean()
	isAdmin?: boolean

	role?: TypeRole
}
