import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider options={{clientMaxAge: 240, keepAlive: 180}} session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
