import '@/styles/globals.css'
import Footer from '../components/Footer/Footer'
import '../styles/footer.css'
import Navbar from '../components/Navbar/Navbar'
import '../styles/navbar.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}