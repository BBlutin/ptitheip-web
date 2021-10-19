import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { Provider } from 'next-auth/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider options={{clientMaxAge: 240, keepAlive: 180}} session={pageProps.session}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
       />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
