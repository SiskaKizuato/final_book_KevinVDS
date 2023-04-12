import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/footer.css';
import '../styles/navbar.css';
import '../styles/join.css';
import '../styles/saleup.css';
import '../styles/popular.css';
import '../styles/test.css';
import '../styles/allBooks.css';
import '../styles/carousel.css';
import { Provider } from 'react-redux';
import store from '../App/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
