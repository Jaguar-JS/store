import { FC } from 'react'
import SquareButton from '@/ui/square-button/SquareButton'
import { FiUser } from 'react-icons/fi'
import Column from '@/ui/grid/Column'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

const HeaderProfile: FC = () => {
	const { isLoggedIn } = useAuth()
	return (
		<Column size={3} className='flex items-center'>
			{isLoggedIn ?
				<>
					<SquareButton Icon={FiUser} />
					<div className='ml-3'>
						<div className='text-sm text-gray'>Jaguar-JS</div>
						<button className='btn-link'>Logout</button>
					</div>
				</> : <Link href='/auth' className='btn-link'>Goto Login</Link>}
			</Column>
				)
			}

			export default HeaderProfile
