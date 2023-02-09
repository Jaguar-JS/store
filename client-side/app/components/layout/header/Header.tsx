import { FC } from 'react'

import styles from './Header.module.scss'
import HeaderMenu from './menu/HeaderMenu'
import HeaderLogo from './logo/HeaderLogo'
import HeaderButtons from '@/layout/header/buttons/HeaderButtons'

function HeaderProfile() {
	return null
}

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<HeaderLogo />
			<HeaderMenu />
			<HeaderButtons />
			<HeaderProfile />
		</header>
	)
}

export default Header
