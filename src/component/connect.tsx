// import { Web3Button } from '@web3modal/react'
import React, { useState, useEffect } from 'react';
import web3 from 'web3';
const Connect = () => {
  // const [balance, setBalance] = useState(0);

  const getBalance = async () => {
    // e.preventDefault()
    try {
      // const apiRes = await fetch('https://wallet-connect-api.com/balance')
      // const data = await apiRes.json();
      // setBalance(data.balance);
      (window as any).web3 = new web3((window as any).ethereum);
      const accounts = await window.ethereum?.request({ method: 'eth_requestAccounts' })

      let weiBalance = await (window as any).web3.eth.getBalance(accounts);
      let ethBalance = (window as any).web3.utils.fromWei(weiBalance);
      console.log(ethBalance);

    } catch (error) {
      alert("Error with Metamask!")
      console.log(error);

    }
  }

  useEffect(() => {
    getBalance()
  }, [])
  // console.log(balance);

  return (
    <div>hello</div>
  )
}

export default Connect

