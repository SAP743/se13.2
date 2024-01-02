export type AddressType  = {
    97: string;
    56: string;
  }
  
  export enum CHAIN_ID {
    TESTNET = 97,
    MAINNET = 56,
  }
  
  export default function getChainIdFromEnv(): number {
    const env = process.env.NEXT_PUBLIC_CHAIN_ID;
    if (!env) { return 97;}
    return parseInt(env);
  }
  
  
  export const getRPC = () => {
    if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
      return process.env.NEXT_PUBLIC_RPC_MAINNET;
    return process.env.NEXT_PUBLIC_RPC_TESTNET;
  }
  
export const SMART_ADDRESS = {
    CROWD_SALE: { 97: '0xA2FE414E565511f754Fa62DAdD4aA494e55683bB', 56: '' },
    USDT:  { 97: '0x3CFE0c88e45eD56C0DE485FCcbbcFD64aB60cd1E', 56: ''},
}