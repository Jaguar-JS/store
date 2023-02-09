import { FC } from 'react'
import { formatToCurrency } from '@/utils/format-to-currency'

const HotSale: FC = () => {
	return (
		<div className='text-white py-16 px-8'>
			<div className='text-sm uppercase'>Hot sale</div>
			<h1 className='font-serif font-normal text-5xl uppercase mt-5 mb-14'>A red dress will brighten up your evening</h1>

			<div className='flex items-end justify-between'>
				<div>
					<span className='font-normal text-3xl'>{formatToCurrency(195)}</span>
					<span className='line-through opacity-50 text-sm ml-2'>{formatToCurrency(195)}</span>
				</div>
				<button className='text-sm text-white uppercase border-b border-white/20'>Buy now</button>
			</div>
		</div>
	)
}

export default HotSale
