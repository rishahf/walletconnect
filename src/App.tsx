import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Button, Web3Modal, Web3NetworkSwitch } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, goerli } from 'wagmi/chains'
import HomePage from './component/homepage'
import { getAccount, readContract } from '@wagmi/core'
import Connect from './component/connect'
import { useEffect, useState } from 'react'
import { log } from 'console'
import Web3 from 'web3'
// import web3 from 'web3';
// import Web3 from 'web3'
// const [state, setState] = useState("")

const chains = [arbitrum, mainnet, polygon, goerli]
const projectId = '9fa5840d68d76d33bb2637b66c8f6eba'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})


const ethereumClient = new EthereumClient(wagmiClient, chains)
let address = ethereumClient.getAccount()
// let profile = ethereumClient.getAccount()
// async function fetchEnsAvatar(profile: any) {
//   const image = await ethereumClient.fetchEnsAvatar(profile)
//   return image
// }
// fetchEnsAvatar(profile)
//   .then((image) => console.log(`Balance of `))
//   .catch((error) => console.error(error))

// let image = ethereumClient.fetchEnsAvatar({ address } as any)
// console.log(image)

function App() {

  const [balance, setBalance] = useState<any>();
  const [symbol, setSymbol] = useState("")

  const getFetchBalance = async () => {
    try {
      const balance = await ethereumClient.fetchBalance((address) as any);
      setBalance(balance.formatted);
      setSymbol(balance.symbol)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFetchBalance();
  }, []);
  console.log(address.address)
  console.log(balance)
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <HomePage />
        <div className='container'>
          <div className="row">
            <h3 className="" style={{ textAlign: "center", paddingTop: "5px" }}>Address:</h3>
            <h3 className="" style={{ textAlign: "center", }}> {address.address?.slice(0, 4) + "...." + address.address?.slice(address.address?.length - 5, address?.address?.length)}</h3>
            <div className="col-md-12 " style={{ textAlign: "center" }}>
              <h3 className="" style={{ textAlign: "center" }}>Balance:</h3>
              <button type="button" className="btn btn-primary" >{balance} {symbol}</button>
              {/* <button type="button" className="btn btn-primary">Primary</button> */}
            </div>
          </div>
        </div>
      </WagmiConfig >
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
export default App