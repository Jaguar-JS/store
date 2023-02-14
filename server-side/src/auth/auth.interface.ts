export type TypeRole = 'ADMIN' | 'CLIENT'

export interface IUser {
	id: number
	email: string
	isAdmin: boolean
	createdAt: string
}

export interface ITokensAuth {
	refreshToken: string
	accessToken: string
}
