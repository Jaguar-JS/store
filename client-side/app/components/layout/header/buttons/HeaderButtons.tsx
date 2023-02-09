import { FC } from 'react'
import SquareButton from '@/ui/square-button/SquareButton'
import { FiBell, FiSearch, FiShoppingCart } from 'react-icons/fi'
import Column from '@/ui/grid/Column'

const HeaderButtons: FC = () => {
	return (
	    <Column size={2} className='gap-5'>
				<SquareButton Icon={FiSearch} onClick={() => {}} number={23} />
				<SquareButton Icon={FiBell} onClick={() => {}} />
				<SquareButton Icon={FiShoppingCart} onClick={() => {}} />
			</Column>
	)
}

export default HeaderButtons
