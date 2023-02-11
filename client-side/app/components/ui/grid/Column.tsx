import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IColumn {
  size: number
  className?: string
  isCenter?: boolean
  isPadding?: boolean
  isBorder?: boolean
}

const Column: FC<PropsWithChildren<IColumn>> = ({
                                                  size,
                                                  className,
                                                  isCenter = true,
                                                  isPadding = true,
                                                  isBorder = true,
                                                  children
                                                }) => {
  return (
    <div
      style={{
        gridColumn: `span ${size} / span ${size}`
      }}
      className={cn(
        'h-full flex items-center',
        { 'justify-center': isCenter },
        { 'border-r-2 border-black-divider border-solid': isBorder },
        { 'p-3': isPadding },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Column
