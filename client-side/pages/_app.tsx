import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import '@/assets/styles/globals.scss'

import { persistor, store } from '@/store/store'
import { manrope } from '@/assets/fonts/Manrope/Manrope'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<>
						<style jsx global>{`
							html {
								font-family: ${manrope.style.fontFamily};
							}
						`}</style>

						<Component {...pageProps} />
					</>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
