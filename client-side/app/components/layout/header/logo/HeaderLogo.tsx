import { FC } from 'react'
import Column from '@/ui/grid/Column'
import Link from 'next/link'
import Image from 'next/image'
import styles from './HeaderLogo.module.scss'
const  HeaderLogo: FC = () => {
 return (
<Column size={2}>
  <Link href='/' className={styles.logo}>
    <Image
      src='/images/logo.svg'
      width={100}
      height={100}
      alt='Lorian shop'
      className={styles.img}
    />
    <span className={styles.topWord}>lorian</span>
    <span className={styles.lowerWord}>store</span>
  </Link>
</Column>
        )
}
export default HeaderLogo
