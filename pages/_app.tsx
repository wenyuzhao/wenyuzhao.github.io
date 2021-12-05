import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

if (globalThis.window) window.addEventListener('load', () => console.info('Hi, how are you 🐨'));