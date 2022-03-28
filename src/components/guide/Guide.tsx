import React from 'react'
import GuideCard from '../../utilities/GuideCard'

const guides=[{
    step:1,
    text:"Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive SHIB or LEASH.",
    header:"Create a metamask"
},{
    step:2,
    text:"You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the ERC-20 network when transfering ETH.",
    header:"Send ETH to your wallet"
},
{
    step:4,
    text:"You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.",
    header:"Swap ETH for SHIB, LEASH or BONEyour wallet to ShibaSwap"
},
{
    step:4,
    text:"You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.",
    header:"Swap ETH for SHIB, LEASH or BONEyour wallet to ShibaSwap"
}]

function Guide() {
  return (
<section className='bg-[#201e29]'>
    <div className='container text-center lg:text-left'>
<header className='uppercase text-white text-center font-bold text-2xl py-[20px]'>quick start guide</header>


{guides.map(item=><GuideCard text={item.text} step={item.step} title={item.header}/>)}

    </div>
</section>
  )
}

export default Guide