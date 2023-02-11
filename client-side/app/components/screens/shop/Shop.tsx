import { FC } from 'react'
import { IProductsPage } from '@/types/product.interface'
import Layout from '@/layout/Layout'
import Row from '@/ui/grid/Row'
import ProductItem from '@/screens/shop/ProductItem'

const Shop: FC<IProductsPage> = ({ products }) => {
  return (
    <Layout
      title='Store'
      description='Catalog clothing and accessories'
    >
      <Row
        className='bg-dark-primary'
        style={{
          backgroundBlendMode: 'multiply',
          backgroundImage: 'url(/images/texture.jpg',
          backgroundRepeat: 'repeat'
        }}
      >
        {products.map((product, index) => (

          <ProductItem key={product.id} product={product} index={index} />

        ))}
      </Row>
    </Layout>
  )
}
export default Shop
