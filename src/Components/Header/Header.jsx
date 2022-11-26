import React, {useState} from 'react';
import styles from "./styles.module.css"
import {connectMetamask} from "../../Utils/ConnectMetamask";
import {
    LimitOrderBuilder,
    LimitOrderProtocolFacade,
    Web3ProviderConnector,
} from '@1inch/limit-order-protocol';


//0x94Bc2a1C732BcAd7343B25af48385Fe76E08734f address for approve
const Header = () => {
    const [balance,setBalance] = useState("connect  metamask")
    const [id,setChainId] = useState("")
    const [walletAddress,setAddress] = useState("")
    const [provider,setProvider] = useState("")
    //
    // const connector = new Web3ProviderConnector(provider);
    // const contractAddress = "0x94Bc2a1C732BcAd7343B25af48385Fe76E08734f"
    //
    // const limitOrderBuilder = new LimitOrderBuilder(
    //     contractAddress,
    //     id,
    //     connector
    // );
    //
    // const limitOrderProtocolFacade = new LimitOrderProtocolFacade(
    //     contractAddress,
    //     connector
    // );
    // const limitOrder = limitOrderBuilder.buildLimitOrder({
    //     makerAssetAddress: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    //     takerAssetAddress: '0x111111111117dc0aa78b770fa6a738034120c302',
    //     makerAddress: walletAddress,
    //     makerAmount: '100',
    //     takerAmount: '200',
    //     predicate: '0x',
    //     permit: '0x',
    //     interaction: '0x',
    // });
    // const limitOrderTypedData = limitOrderBuilder.buildLimitOrderTypedData(
    //     limitOrder
    // );
    // const limitOrderSignature = limitOrderBuilder.buildOrderSignature(
    //     walletAddress,
    //     limitOrderTypedData
    // );


    console.log(provider)


    const getData = async ()=>{
       const userInfo = await connectMetamask()
        setBalance(userInfo.userBalance)
        setChainId(userInfo.userId)
        setAddress(userInfo.userAddress)
        setProvider(userInfo.userProvider)
        }
    return (
        <header className={styles.wrapper}>
            <div className={styles.btn_block}>
                <button className={styles.connect_btn} onClick={()=>{
                    getData()
                }}>{balance}</button>
            </div>

        </header>
    );
};

export default Header;