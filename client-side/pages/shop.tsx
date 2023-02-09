import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'

import Shop from '@/screens/shop/Shop'
import { ProductService } from '@/services/product.service'
import { IProductsPage } from '@/types/product.interface'

const ShopPage: NextPage<IProductsPage> = ({ products }) => {
	return <Shop products={products}/>
}

export const getStaticPops: () => Promise<void> = async () => {
	const products = await ProductService.getProducts()
}

export default ShopPage
