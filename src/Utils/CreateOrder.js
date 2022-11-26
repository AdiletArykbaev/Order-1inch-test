import {
    LimitOrderBuilder,
    LimitOrderProtocolFacade,
    Web3ProviderConnector,
} from '@1inch/limit-order-protocol';
export const createOrder = async (provider,id,walletAddress)=>{
    console.log("Provider in createOrrder",provider)

    const connector =  await new Web3ProviderConnector(provider);

    const contractAddress =  "0x94Bc2a1C732BcAd7343B25af48385Fe76E08734f"


    const limitOrderBuilder = await new LimitOrderBuilder(
        contractAddress,
        id,
        connector
    );

    const limitOrderProtocolFacade = await new LimitOrderProtocolFacade(
        contractAddress,
        connector
    );

// Create a limit order and it's signature
    const limitOrder = await limitOrderBuilder.buildLimitOrder({
        makerAssetAddress: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        takerAssetAddress: '0x111111111117dc0aa78b770fa6a738034120c302',
        makerAddress: walletAddress,
        makerAmount: '100',
        takerAmount: '200',
        predicate: '0x',
        permit: '0x',
        interaction: '0x',
    });
    const limitOrderTypedData = await limitOrderBuilder.buildLimitOrderTypedData(
        limitOrder
    );
    const limitOrderSignature = await limitOrderBuilder.buildOrderSignature(
        walletAddress,
        limitOrderTypedData
    );

// Create a call data for fill the limit order
    const callData =  limitOrderProtocolFacade.fillLimitOrder(
        limitOrder,
        limitOrderSignature,
        '100',
        '0',
        '50'
    );


    console.log(limitOrder)
}