import { store } from '@/store/store';
import '@/styles/globals.css';
import "rsuite/dist/rsuite.min.css";
import 'swiper/css';
import "swiper/css/free-mode";
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import customTheme from '@/utils/chakra_theme';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
