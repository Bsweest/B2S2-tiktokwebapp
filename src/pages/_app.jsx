import { enableLegendStateReact } from '@legendapp/state/react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '../config';
import '../styles/globals.css';
import Main from '../templates/Main';
import SetupClient from '../templates/global/ClientData';

enableLegendStateReact();

const queryClient = new QueryClient();

function MyApp({ Component, pageProps = { title: 'B2S2' } }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  SetupClient();

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={queryClient}>
        <Header title={pageProps.title} />
        <Main>
          <Component {...pageProps} />
        </Main>
      </QueryClientProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
