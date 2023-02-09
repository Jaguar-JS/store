import { FC } from 'react'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

const HomeInformation: FC = () => {
	return (
		<Row isBorder={false}>
			<Column size={3} className='flex-col border-t-2 border-black py-14'>
				<div className='font-normal text-4xl text-white'>100K</div>
				<div className='text-gray text-white/60 text-sm'>Customers</div>
			</Column>
			<Column size={9} className='flex-col border-t-2 border-black' isBorder={false}>
				<div className='p-10'>
					<div className='font-normal text-white mb-2'>New collection</div>
					<div className='text-gray text-white/60 text-sm'>
						The red dress was inspired by a love of fashion and a fear of
						complacency. Our challenge was to create a dress
					</div>
				</div>
			</Column>
		</Row>
	)
}

export default HomeInformation
