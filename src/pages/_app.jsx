import '@/src/styles/index.scss'
import '@/public/assets/css/main.css'

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
