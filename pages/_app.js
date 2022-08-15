import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

const supportedChainIds = [1, 4, 137];

const connectors = {
  injected: {}
};

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThirdwebProvider desiredChainId={ChainId.Goerli} chainRpc={{[ChainId.Goerli]: 'https://goerli.infura.io/v3/f4135a4a7dd14611846e35ab0b57144a'}}>

            <Component {...pageProps} />
        </ThirdwebProvider>
    )
}

export default MyApp
