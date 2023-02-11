import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useCart } from '@/hooks/useCart'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { paymentService } from '@/services/payment.service'
import SquareButton from '@/ui/square-button/SquareButton'
import { FiShoppingCart } from 'react-icons/fi'
import { useOutside } from '@/hooks/useOutside'
import cn from 'clsx'

const Cart: FC = () => {
	const [ ref, isShow, setIsShow] = useOutside(false)

	const { cart, total } = useCart()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create payment'],
		() => paymentService.createPayment(total),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url)
			}
		}
	)

	return (
		<div className={styles['wrapper-cart']} ref={ref}>
			<SquareButton
				Icon={FiShoppingCart}
				onClick={() => setIsShow(!isShow)}
				number={cart.length} />
			<div className={cn('absolute top-[5.5rem] w-80 -left-[12.7rem] bg-black px-5 py-3 menu z-10 border-solid border-2',
				isShow ? 'open-menu' : 'close-menu'
			)}>
				<div className={styles.text}>my cart</div>

				<div className={styles.cart}>
					{cart.length ? (
						cart.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Cart is empty!</div>
					)}
				</div>

				<div className={styles.footer}>
					<div>Total:</div>
					<div>{formatToCurrency(total)}</div>
				</div>
				<div className='text-center'>
					<button className='btn-link mt-5 mb-2' onClick={() => mutate()}>
					Payment
				</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
