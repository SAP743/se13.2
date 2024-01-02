/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  FLPCrowdSale,
  FLPCrowdSaleInterface,
} from "../../../contracts/FLPCrowndsale.sol/FLPCrowdSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bnb_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usdt_rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "icotoken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByBNB",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByUSDT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetBNBRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetUSDTRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "SetUSDTToken",
    type: "event",
  },
  {
    inputs: [],
    name: "BNB_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDT_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTokenByBNB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "buyTokenByUSDT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "BNBAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountBNB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountUSDT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setBNBRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setUSDTRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_address",
        type: "address",
      },
    ],
    name: "setUSDTToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdtToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d0b38038062001d0b8339818101604052810190620000379190620002bb565b620000576200004b620000f160201b60201c565b620000f960201b60201c565b836002819055508260038190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506200032d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b620001d781620001c2565b8114620001e357600080fd5b50565b600081519050620001f781620001cc565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022a82620001fd565b9050919050565b6200023c816200021d565b81146200024857600080fd5b50565b6000815190506200025c8162000231565b92915050565b60006200026f82620001fd565b9050919050565b6000620002838262000262565b9050919050565b620002958162000276565b8114620002a157600080fd5b50565b600081519050620002b5816200028a565b92915050565b60008060008060808587031215620002d857620002d7620001bd565b5b6000620002e887828801620001e6565b9450506020620002fb87828801620001e6565b93505060406200030e878288016200024b565b92505060606200032187828801620002a4565b91505092959194509250565b6119ce806200033d6000396000f3fe6080604052600436106100fe5760003560e01c8063610757e411610095578063a98ad46c11610064578063a98ad46c146102b6578063acb03d43146102e1578063c5d156511461031e578063f2fde38b14610347578063fc0c546a14610370576100fe565b8063610757e41461022057806366e226bd1461024b578063715018a6146102745780638da5cb5b1461028b576100fe565b806331927737116100d157806331927737146101bd5780633ccfd60b146101c75780633e3f2359146101de578063592a00e4146101f5576100fe565b8063157fc821146101035780631832d8b61461012e5780631b4622d61461016b5780632be8629914610194575b600080fd5b34801561010f57600080fd5b5061011861039b565b604051610125919061115b565b60405180910390f35b34801561013a57600080fd5b50610155600480360381019061015091906111a7565b6103a1565b604051610162919061115b565b60405180910390f35b34801561017757600080fd5b50610192600480360381019061018d91906111a7565b6103b8565b005b3480156101a057600080fd5b506101bb60048036038101906101b691906111a7565b610401565b005b6101c561044a565b005b3480156101d357600080fd5b506101dc6106aa565b005b3480156101ea57600080fd5b506101f36106fb565b005b34801561020157600080fd5b5061020a610841565b604051610217919061115b565b60405180910390f35b34801561022c57600080fd5b50610235610847565b6040516102429190611215565b60405180910390f35b34801561025757600080fd5b50610272600480360381019061026d9190611280565b61086d565b005b34801561028057600080fd5b506102896108f0565b005b34801561029757600080fd5b506102a0610904565b6040516102ad91906112bc565b60405180910390f35b3480156102c257600080fd5b506102cb61092d565b6040516102d89190611336565b60405180910390f35b3480156102ed57600080fd5b50610308600480360381019061030391906111a7565b610953565b604051610315919061115b565b60405180910390f35b34801561032a57600080fd5b50610345600480360381019061034091906111a7565b61096a565b005b34801561035357600080fd5b5061036e6004803603810190610369919061137d565b610bac565b005b34801561037c57600080fd5b50610385610c2f565b6040516103929190611336565b60405180910390f35b60025481565b6000600354826103b191906113d9565b9050919050565b6103c0610c55565b806003819055507fbdaa37e3f6679857d8c3e80d172bd45af732a8658cf1d690c81ca96f5a443b5b816040516103f6919061115b565b60405180910390a150565b610409610c55565b806002819055507fb0cc740bbbfcd5af22ee3956c6b44d2d6f499e2a86cb11d915fcce88dca2113a8160405161043f919061115b565b60405180910390a150565b6000349050600061045a82610953565b90506000811161049f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049690611478565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104fb91906112bc565b602060405180830381865afa158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c91906114ad565b101561057d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057490611526565b60405180910390fd5b813373ffffffffffffffffffffffffffffffffffffffff163110156105d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ce90611526565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561063f573d6000803e3d6000fd5b5061066d600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163383610cd3565b7ff695091b71a5c3ea41510251da89a66470bbcf1ee118f820a1bab8739e29ea50338260405161069e929190611546565b60405180910390a15050565b6106b2610c55565b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156106f8573d6000803e3d6000fd5b50565b610703610c55565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161079d91906112bc565b602060405180830381865afa1580156107ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107de91906114ad565b6040518363ffffffff1660e01b81526004016107fb929190611546565b6020604051808303816000875af115801561081a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e91906115a7565b50565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610875610c55565b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f43036333e58a6f9255617b54ec9f5825590c8ee695a222dc35e5001927f07151816040516108e59190611336565b60405180910390a150565b6108f8610c55565b6109026000610d59565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002548261096391906113d9565b9050919050565b6000610975826103a1565b9050813373ffffffffffffffffffffffffffffffffffffffff163110156109d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c890611526565b60405180910390fd5b60008111610a14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0b90611478565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a7091906112bc565b602060405180830381865afa158015610a8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab191906114ad565b1015610af2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae990611526565b60405180910390fd5b610b42600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1633600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685610e1d565b610b6f600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163383610cd3565b7f5c0161fad3fa89cfebd4a74115d9f81661cdd1b9008d05a238ea9d65088e20643382604051610ba0929190611546565b60405180910390a15050565b610bb4610c55565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1a90611646565b60405180910390fd5b610c2c81610d59565b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c5d610ea6565b73ffffffffffffffffffffffffffffffffffffffff16610c7b610904565b73ffffffffffffffffffffffffffffffffffffffff1614610cd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc8906116b2565b60405180910390fd5b565b610d548363a9059cbb60e01b8484604051602401610cf2929190611546565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610eae565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610ea0846323b872dd60e01b858585604051602401610e3e939291906116d2565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610eae565b50505050565b600033905090565b6000610f10826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610f759092919063ffffffff16565b9050600081511115610f705780806020019051810190610f3091906115a7565b610f6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f669061177b565b60405180910390fd5b5b505050565b6060610f848484600085610f8d565b90509392505050565b606082471015610fd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc99061180d565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610ffb919061189e565b60006040518083038185875af1925050503d8060008114611038576040519150601f19603f3d011682016040523d82523d6000602084013e61103d565b606091505b509150915061104e8783838761105a565b92505050949350505050565b606083156110bc5760008351036110b457611074856110cf565b6110b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110aa90611901565b60405180910390fd5b5b8290506110c7565b6110c683836110f2565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000825111156111055781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111399190611976565b60405180910390fd5b6000819050919050565b61115581611142565b82525050565b6000602082019050611170600083018461114c565b92915050565b600080fd5b61118481611142565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc611176565b5b60006111cb84828501611192565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111ff826111d4565b9050919050565b61120f816111f4565b82525050565b600060208201905061122a6000830184611206565b92915050565b600061123b826111d4565b9050919050565b600061124d82611230565b9050919050565b61125d81611242565b811461126857600080fd5b50565b60008135905061127a81611254565b92915050565b60006020828403121561129657611295611176565b5b60006112a48482850161126b565b91505092915050565b6112b681611230565b82525050565b60006020820190506112d160008301846112ad565b92915050565b6000819050919050565b60006112fc6112f76112f2846111d4565b6112d7565b6111d4565b9050919050565b600061130e826112e1565b9050919050565b600061132082611303565b9050919050565b61133081611315565b82525050565b600060208201905061134b6000830184611327565b92915050565b61135a81611230565b811461136557600080fd5b50565b60008135905061137781611351565b92915050565b60006020828403121561139357611392611176565b5b60006113a184828501611368565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113e482611142565b91506113ef83611142565b92508282026113fd81611142565b91508282048414831517611414576114136113aa565b5b5092915050565b600082825260208201905092915050565b7f416d6f756e74206973207a65726f000000000000000000000000000000000000600082015250565b6000611462600e8361141b565b915061146d8261142c565b602082019050919050565b6000602082019050818103600083015261149181611455565b9050919050565b6000815190506114a78161117b565b92915050565b6000602082840312156114c3576114c2611176565b5b60006114d184828501611498565b91505092915050565b7f496e73756666696369656e74206163636f756e742062616c616e636500000000600082015250565b6000611510601c8361141b565b915061151b826114da565b602082019050919050565b6000602082019050818103600083015261153f81611503565b9050919050565b600060408201905061155b60008301856112ad565b611568602083018461114c565b9392505050565b60008115159050919050565b6115848161156f565b811461158f57600080fd5b50565b6000815190506115a18161157b565b92915050565b6000602082840312156115bd576115bc611176565b5b60006115cb84828501611592565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061163060268361141b565b915061163b826115d4565b604082019050919050565b6000602082019050818103600083015261165f81611623565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061169c60208361141b565b91506116a782611666565b602082019050919050565b600060208201905081810360008301526116cb8161168f565b9050919050565b60006060820190506116e760008301866112ad565b6116f460208301856112ad565b611701604083018461114c565b949350505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611765602a8361141b565b915061177082611709565b604082019050919050565b6000602082019050818103600083015261179481611758565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006117f760268361141b565b91506118028261179b565b604082019050919050565b60006020820190508181036000830152611826816117ea565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611861578082015181840152602081019050611846565b60008484015250505050565b60006118788261182d565b6118828185611838565b9350611892818560208601611843565b80840191505092915050565b60006118aa828461186d565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006118eb601d8361141b565b91506118f6826118b5565b602082019050919050565b6000602082019050818103600083015261191a816118de565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b600061194882611921565b611952818561141b565b9350611962818560208601611843565b61196b8161192c565b840191505092915050565b60006020820190508181036000830152611990818461193d565b90509291505056fea26469706673582212207de5cf0c26762407fd6b3b9d778b23be754e1f611079d93b4ca656e7c12794c064736f6c63430008130033";

type FLPCrowdSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FLPCrowdSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FLPCrowdSale__factory extends ContractFactory {
  constructor(...args: FLPCrowdSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    bnb_rate: BigNumberish,
    usdt_rate: BigNumberish,
    wallet: AddressLike,
    icotoken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      bnb_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    );
  }
  override deploy(
    bnb_rate: BigNumberish,
    usdt_rate: BigNumberish,
    wallet: AddressLike,
    icotoken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      bnb_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    ) as Promise<
      FLPCrowdSale & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FLPCrowdSale__factory {
    return super.connect(runner) as FLPCrowdSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FLPCrowdSaleInterface {
    return new Interface(_abi) as FLPCrowdSaleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FLPCrowdSale {
    return new Contract(address, _abi, runner) as unknown as FLPCrowdSale;
  }
}