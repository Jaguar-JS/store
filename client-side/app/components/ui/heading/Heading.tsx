import {FC, PropsWithChildren, ReactNode} from 'react'
import cn from 'clsx'
import css from "./Heading.module.scss";

const Heading: FC<PropsWithChildren<{ className?: string }>> = ({children, className}) => {
    return (
        <h1 className={cn(css.heading, className)}>
            {children}
        </h1>
    )
}
export default Heading
