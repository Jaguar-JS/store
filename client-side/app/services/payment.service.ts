import { IPaymentResponse } from '@/types/payment.interface'

import { axiosClassic } from '@/api/api'

const PAYMENT = 'payment'

export const paymentService = {
	async createPayment(amount: number) {
		const { data } = await axiosClassic.post<IPaymentResponse>(PAYMENT, {
			amount
		})

		return data
	}
}
