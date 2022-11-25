import Header from '../config';
import '../styles/globals.css';

function MyApp({ Component, pageProps = { title: 'B2S2' } }) {
  return (
    <>
      <Header title={pageProps.title} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
