import React, {useState} from 'react';
import styles from "./styles.module.css"
import {connectMetamask} from "../../Utils/ConnectMetamask";
import {createOrder} from "../../Utils/CreateOrder";


//0x94Bc2a1C732BcAd7343B25af48385Fe76E08734f address for approve
const Header = () => {
    const [balance,setBalance] = useState("connect  metamask")
    const [id,setChainId] = useState("")
    const [walletAddress,setAddress] = useState("")
    const [provider,setProvider] = useState("")
    //



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
                <button onClick={()=>{
                    createOrder(provider,id,walletAddress)
                }} className={styles.createOrder_btn}>CreateOrder</button>
            </div>

        </header>
    );
};

export default Header;