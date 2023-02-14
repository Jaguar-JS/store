import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
	const { isLoading, isLoggedIn } = useAuth()
	console.log(isLoading, isLoggedIn)

	const { query, push } = useRouter()

	const redirect = query.redirect ? String(query.redirect) : '/'

	useEffect(() => {
		if (isLoggedIn) push(redirect)
	}, [isLoggedIn, redirect, push])
	return {isLoading}
}
