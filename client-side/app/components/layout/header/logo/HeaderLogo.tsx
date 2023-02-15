import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Column from '@/ui/grid/Column'

import styles from './HeaderLogo.module.scss'

const HeaderLogo: FC = () => {
	return (
		<Column size={3}>
			<Link href='/' className={styles.logo}>
				<Image
					src='/images/logo.svg'
					priority
					width={100}
					height={100}
					alt='Lorian shop'
					className={styles.img}
				/>
				<span>
					<span className={styles.topWord}>lorian</span>
					<span className={styles.lowerWord}>store</span>
				</span>
			</Link>
		</Column>
	)
}
export default HeaderLogo
