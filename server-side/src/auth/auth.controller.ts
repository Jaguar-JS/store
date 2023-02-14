import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { RefreshTokenDto } from './dto/refresh-token.dto'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	// Login
	@ApiOperation({ summary: 'Login to the system' })
	@ApiResponse({
		status: 200,
		type: AuthService
	})
	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {
		return this.authService.login(dto)
	}

	// Register
	@ApiOperation({ summary: 'Refresh token' })
	@ApiResponse({ status: 200, type: AuthDto })
	@HttpCode(200)
	@Post('register')
	async register(@Body() dto: AuthDto) {
		return this.authService.register(dto)
	}

	// Refresh token
	@ApiOperation({ summary: 'Refresh token' })
	@ApiResponse({ status: 200, type: RefreshTokenDto })
	@HttpCode(200)
	@Post('login/access-token')
	async getNewTokens(@Body() data: RefreshTokenDto) {
		return this.authService.getNewTokens(data)
	}
}
