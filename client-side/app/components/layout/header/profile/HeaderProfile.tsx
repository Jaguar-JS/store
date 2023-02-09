import { FC } from 'react'
import SquareButton from '@/ui/square-button/SquareButton'
import { FiUser } from 'react-icons/fi'
import Column from '@/ui/grid/Column'

const HeaderProfile: FC = () => {
	return (
		<Column size={3} className='flex items-center'>
			<SquareButton Icon={FiUser} />
			<div className='ml-3'>
				<div className='text-sm text-gray'>Jaguar-JS</div>
			</div>
		</Column>
	)
}

export default HeaderProfile
