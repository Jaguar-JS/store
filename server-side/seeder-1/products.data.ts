import { Product } from '@prisma/client'

export type IProductPart = Pick<Product, 'name' | 'images'>

export const products: IProductPart[] = [
	{
		name: 'Short beanie',
		images: [
			'/uploads/images/products/short.png',
			'/uploads/images/products/jeans.png',
			'/uploads/images/products/jeans-2.png'
		]
	},
	{
		name: 'Comfort jeans whith side vent',
		images: ['/uploads/images/products/jeans.png']
	},
	{
		name: 'Short puffer jacket',
		images: ['/uploads/images/products/sleeveless-jacket.png']
	},
	{
		name: 'Ripped mom jeans',
		images: ['/uploads/images/products/jeans-2.png']
	},
	{
		name: 'Contrast trainers whith mesh detail',
		images: ['/uploads/images/products/trainers.png']
	}
]
