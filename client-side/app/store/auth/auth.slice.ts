import { createSlice } from '@reduxjs/toolkit'

import { IAuthInitialState } from './auth.types'
import { login, logout, register } from '@/store/auth/auth.action'

const initialState: IAuthInitialState = {
	isLoading: false,
	isLoggedIn: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoggedIn = true
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.isLoggedIn = false
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.isLoggedIn = true
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.isLoggedIn = false
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.isLoggedIn = false
			})
	}
})
