import { FC } from 'react'

import HeaderButtons from '@/layout/header/buttons/HeaderButtons'

import Row from '@/ui/grid/Row'

import styles from './Header.module.scss'
import HeaderLogo from './logo/HeaderLogo'
import HeaderMenu from './menu/HeaderMenu'
import HeaderProfile from '@/layout/header/profile/HeaderProfile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Row>
				<HeaderLogo />
				<HeaderMenu />
				<HeaderButtons />
				<HeaderProfile />
			</Row>
		</header>
	)
}

export default Header
