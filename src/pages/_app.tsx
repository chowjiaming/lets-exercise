import {type AppType} from 'next/app';
import {type Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';

import {ChakraProvider} from '@chakra-ui/react';
import {theme} from '@/styles';
import {Layout} from '@/layout';

import {api} from '@/utils/api';

const MyApp: AppType<{session: Session | null}> = ({
  Component,
  pageProps: {session, ...pageProps},
}) => {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ChakraProvider>
  );
};

export default api.withTRPC(MyApp);
