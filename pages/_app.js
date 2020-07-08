import '../style.css';
import 'react-slidedown/lib/slidedown.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} style={{margin:0}}/>
}