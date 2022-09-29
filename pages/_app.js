import '../styles/globals.css'
import PageProvider from '../helpers/PageProvider';
function MyApp({ Component, pageProps, emotionCache }) {
  return (
    <PageProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </PageProvider>
  )
}

export default MyApp
