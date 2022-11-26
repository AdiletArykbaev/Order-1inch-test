import {ethers} from "ethers";

export const connectMetamask = async()=>{
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const balance = await signer.getBalance()
    const address = await signer.getAddress();
    const id = await signer.getChainId();
    console.log(signer)
    return {
        userAddress: address,
        userBalance: ethers.utils.formatEther(balance),
        userId : id,
        userProvider: provider
    }

}