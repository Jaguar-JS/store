import { toastr } from 'react-redux-toastr'
import { toastError } from '@/utils/toast-error'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '@/services/auth/auth.service'
import { IEmailPassword } from '@/store/auth/auth.types'
import { IAuthResponse } from '@/types/auth.interface'


export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Completed successfully')
			return response.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return response.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/logout()',
	async () => {
		await AuthService.logout()
	}

// export const checkAuth = createAsyncThunk<IAuthResponse>(
// 	'auth/check-auth',
// 	async (_, thunkApi) => {
// 		try {
// 			const response = await AuthService.getNewTokens()
// 			return response.data
// 		} catch (error) {
// 			if (errorCatch(error) === 'jwt expired') {
// 				toastError(
// 					'Logout',
// 					'Your authorization is finished, please sign in again'
// 				)
// 				thunkApi.dispatch(logout())
// 			}
//
// 			return thunkApi.rejectWithValue(error)
// 		}
// 	}
)
