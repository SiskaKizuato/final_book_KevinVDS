import '@/styles/globals.css'
import Footer from '../components/Footer/Footer'
import '../styles/footer.css'
import '../styles/navbar.css'
import '../styles/join.css'
import '../styles/saleup.css'
import '../styles/popular.css'
import '../styles/allBooks.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}