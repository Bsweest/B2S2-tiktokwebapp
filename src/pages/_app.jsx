import { enableLegendStateReact } from '@legendapp/state/react';

import Header from '../config';
import '../styles/globals.css';
import Main from '../templates/Main';

enableLegendStateReact();

function MyApp({ Component, pageProps = { title: 'B2S2' } }) {
  return (
    <>
      <Header title={pageProps.title} />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;
