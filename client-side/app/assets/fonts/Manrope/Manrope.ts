import localFont from '@next/font/local'

export const manrope = localFont({
	src: [
		{
			path: './static/Manrope-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './static/Manrope-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './static/Manrope-Bold.ttf',
			weight: '700',
			style: 'normal',
		}
	],
})
