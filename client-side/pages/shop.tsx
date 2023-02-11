import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'

import Shop from '@/screens/shop/Shop'
import { productService } from '@/services/product.service'
import { IProductsPage } from '@/types/product.interface'

const ShopPage: NextPage<IProductsPage> = ({ products }) => {
	return <Shop products={products}/>
}

// export const getStaticPops: () => Promise<void> = async () => {
// 	const products = await productService.getProducts()
// }
export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
	try {
		const products = await productService.getProducts()
		return {
			props: {
				products
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
export default ShopPage
