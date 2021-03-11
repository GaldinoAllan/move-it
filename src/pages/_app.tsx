import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext';
import { ThemesProvider } from '../contexts/ThemeContext';

import { GlobalStyle } from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemesProvider>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemesProvider>
  )
}
