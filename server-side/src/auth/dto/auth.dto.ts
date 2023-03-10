import { IsEmail, IsString, MinLength } from "class-validator";

export class AuthDto {
	@IsEmail() // Проверка на email
	email: string;

	@MinLength(6, {
		message: 'Password cannot be less than 6 characters!'
	})
	@IsString()
	password: string
}
