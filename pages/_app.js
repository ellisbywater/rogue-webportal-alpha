
import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_MORALIS_SERVER} serverUrl={process.env.NEXT_PUBLIC_MORALIS_APP_ID}>
      <div className="h-full p-none bg-gray-900">
        <Component {...pageProps} />
      </div>
    </MoralisProvider>
  );
}

export default MyApp;
