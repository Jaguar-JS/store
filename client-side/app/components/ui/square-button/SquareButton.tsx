import { FC } from 'react'
import { IconType } from 'react-icons'
import { COLORS } from '@/config/color.config'
import css from './SquareButton.module.scss'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<button
			onClick={onClick}
			className={css.button}
		>
			<Icon color={COLORS['gray-light']} size={20} />
			{!!number && (
				<span className={css.badge}>
					{number}
				</span>
			)}
		</button>
	)
}

export default SquareButton
