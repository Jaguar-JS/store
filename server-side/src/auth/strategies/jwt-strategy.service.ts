import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { User as UserModel } from '@prisma/client'
import { PrismaService } from '../../prisma.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly prisma: PrismaService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: process.env.JWT_SECRET
		})
	}

	async validate({ id }: Pick<UserModel, 'id'>) {
		return this.prisma.user.findUniqueOrThrow({ where: { id } })

		//const user = await this.prisma.user.findUnique({where:{id}})
		// 	if (!user) {
		// 		throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
		// 	}
		// 	return user;
	}
}
