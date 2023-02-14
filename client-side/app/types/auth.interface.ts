import { NextPage } from 'next'
// import { IUser } from '@/types/user.interface'

export type TypeRoles = {
	isAdmin?: boolean
	isUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles }

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken?: string
}

export interface IAuthResponse extends ITokens {
	 // user: IUser | null
}

