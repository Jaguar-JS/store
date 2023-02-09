import { FC } from 'react'
import { IconType } from 'react-icons'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<button
			onClick={onClick}
			className='relative w-12 h-12 bg-black flex items-center justify-center hover:bg-[#0e0e0e] transition-colors duration-200'
		>
			<Icon color='#7d7d7d' size={20} />
			{!!number && (
				<span className='absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-primary font-bold text-[0.7rem] text-white rounded-full p-0.5'>
					{number}
				</span>
			)}
		</button>
	)
}

export default SquareButton
