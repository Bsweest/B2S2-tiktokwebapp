import { enableLegendStateReact } from '@legendapp/state/react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

import Header from '../config';
import '../styles/globals.css';
import Main from '../templates/Main';

enableLegendStateReact();

function MyApp({ Component, pageProps = { title: 'B2S2' } }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Header title={pageProps.title} />
      <Main>
        <Component {...pageProps} />
      </Main>
    </SessionContextProvider>
  );
}

export default MyApp;
