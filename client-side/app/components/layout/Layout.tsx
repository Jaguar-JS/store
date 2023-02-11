import { FC, PropsWithChildren } from 'react'

import Header from './header/Header'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<div>
				<main>
					<Header />
					<section>{children}</section>
				</main>
			</div>
		</>
	)
}

export default Layout
