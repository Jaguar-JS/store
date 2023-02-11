import { FC } from 'react'
import SquareButton from '@/ui/square-button/SquareButton'
import { FiBell, FiSearch, FiShoppingCart } from 'react-icons/fi'
import Column from '@/ui/grid/Column'
import Cart from '@/layout/header/buttons/cart/Cart'

const HeaderButtons: FC = () => {
	return (
	    <Column size={2} className='gap-5'>
				<SquareButton Icon={FiSearch} onClick={() => {}}/>
				<SquareButton Icon={FiBell} onClick={() => {}} />
				<Cart/>
			</Column>
	)
}

export default HeaderButtons
