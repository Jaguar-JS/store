import { GetStaticProps, NextPage } from 'next'

import { IProduct, IProductsPage } from '@/types/product.interface'

import Home from '@/screens/home/Home'
import { ProductService } from '@/services/product.service'


const HomePage: NextPage<IProductsPage> = ({ products }) => {
	return <Home products={products} />
}
/* 
export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
	const products = await ProductService.getProducts()

	return {
		props: {
			products
		}
	}
} */

export default HomePage
