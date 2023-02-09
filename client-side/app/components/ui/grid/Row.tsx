import cn from 'clsx'
import { CSSProperties, FC, PropsWithChildren } from 'react'

interface IRow {
	className?: string
	isBorder?: boolean
	style?: CSSProperties
}

const Row: FC<PropsWithChildren<IRow>> = ({
	children,
	className,
	isBorder = true,
	style = {}
}) => {
	return (
		<div
			className={cn('w-full grid grid-cols-12', className, {
				'border-b-2 border-black border-solid': isBorder
			})}
			style={style}
		>
			{children}
		</div>
	)
}

export default Row
