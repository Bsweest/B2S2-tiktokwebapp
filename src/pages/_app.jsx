import Main from '@/templates/Main';
import { CheckAuthProvider } from '@/templates/global/CheckAuth';
import { enableLegendStateReact } from '@legendapp/state/react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../config';
import '../styles/globals.css';

enableLegendStateReact();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 50000,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps = { title: 'B2S2' } }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  CheckAuthProvider();

  return (
    <>
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default MyApp;
