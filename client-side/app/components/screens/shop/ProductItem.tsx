import { FC } from 'react'
import Column from '@/ui/grid/Column'
import Image from 'next/image'
import { formatToCurrency } from '@/utils/format-to-currency'
import { IProduct } from '@/types/product.interface'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

interface IProductItem {
	product: IProduct
	index: number
}

const ProductItem: FC<IProductItem> = ({ index, product }) => {
	const { cart } = useCart()
	const { addToCart, removeFromCart } = useActions()
	const currentElement = cart.find(
		cartItem => cartItem.product.id === product.id
	)
	return (
		<Column size={index === 0 ? 3 : index === 4 ? 3 : 2}>
			<div className='text-white text-center pb-5'>
				<div className='flex items-center justify-center mb-4' style={{ height: 283 }}>
					<Image src={product.images[0]} alt={product.name} width={220} height={220} /></div>
				<h2 className='font-serif mb-2 text-lg'>{product.name}</h2>
				<div className='mb-3 text-lg'>{formatToCurrency(product.price)}</div>
				<button className='btn-link'
								onClick={() =>
									currentElement
										? removeFromCart({id: currentElement.id})
										: addToCart({product, quantity: 1})}
				>
					{currentElement ? 'Remove from cart' : 'Add to cart'}
				</button>
			</div>
		</Column>
	)
}
export default ProductItem
