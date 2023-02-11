import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {

	const { removeFromCart, changeQuantity } = useActions()

	const { cart } = useCart()
	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className='mt-3'>
			<div className='flex items-center gap-3'>
				<button
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>

					<FiMinus fontSize={13} />
				</button>

				<input
					className='w-10 bg-black text-center'
					disabled
					readOnly
					value={quantity}
				/>

				<button
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
				>
					<FiPlus fontSize={13} />
				</button>

				<button
					className='ml-3 text-dark-primary'
					onClick={() => removeFromCart({ id: item.id })}
				>
					<FiTrash />
				</button>
			</div>
		</div>
	)
}

export default CartActions
