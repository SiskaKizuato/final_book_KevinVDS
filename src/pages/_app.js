import '@/styles/globals.css'
import Footer from '../components/Footer'
import '../styles/footer.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}