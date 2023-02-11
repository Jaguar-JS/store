import localFont from '@next/font/local'

export const playfair = localFont({
	src: [
		{
			path: './static/PlayfairDisplay-Regular.ttf',
			weight: '400',
			style: 'normal',


		},
		{
			path: './static/PlayfairDisplay-Medium.ttf',
			weight: '500',
			style: 'normal',
		}
	],
	variable: '--font-playfair'
})

