import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { cartSlice } from '../store/cart/cart.slice'
import * as authActions from '@/store/auth/auth.action'

const rootAction = {
	...cartSlice.actions,
	...authActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
