/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockUniswapV3Pool,
  MockUniswapV3PoolInterface,
} from "../MockUniswapV3Pool";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "currentPool",
    outputs: [
      {
        internalType: "contract IUniswapV3Pool",
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
        internalType: "int24",
        name: "lowerTick",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "upperTick",
        type: "int24",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "rest0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rest1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "amountSpecified",
        type: "int256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tickSpacing",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
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
    name: "token1",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapFactory",
    outputs: [
      {
        internalType: "contract IUniswapV3Factory",
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
        internalType: "uint256",
        name: "amount0Owed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Owed",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3MintCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b506000806000806000336001600160a01b031663890357306040518163ffffffff1660e01b815260040160a06040518083038186803b15801561005257600080fd5b505afa158015610066573d6000803e3d6000fd5b505050506040513d60a081101561007c57600080fd5b5080516020808301516040808501516060808701516080978801516001600160601b031986841b811690995283831b891660a0529187901b90971660c05260008054600283900b62ffffff90811663010000000265ffffff00000019918b1662ffffff199093168317919091161782558451630b4c774160e11b81526001600160a01b038088166004830152808616602483015260448201929092529451979d50949b5091995095975094955090891692631698ee8292606480840193919291829003018186803b15801561015057600080fd5b505afa158015610164573d6000803e3d6000fd5b505050506040513d602081101561017a57600080fd5b505190506001600160a01b03811661019157600080fd5b600080546001600160a01b03909216660100000000000002600160301b600160d01b0319909216919091179055505050505060805160601c60a05160601c60c05160601c611661610216600039806108655250806109d75280610a7d5280610ae55280610dc75250806104545280610a4c5280610ab35280610d9252506116616000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063a9059cbb11610097578063dd62ed3e11610066578063dd62ed3e146102d2578063ddca3f4314610300578063eeb766da14610320578063fa461e3314610370576100f5565b8063a9059cbb14610203578063d0c93a7c1461022f578063d21220a71461024e578063d348799714610256576100f5565b8063692b69ae116100d3578063692b69ae146101945780636bf144d21461019c57806370a08231146101c35780638bdb2afa146101fb576100f5565b8063095ea7b3146100fa5780630dfe16811461013a57806323b872dd1461015e575b600080fd5b6101266004803603604081101561011057600080fd5b506001600160a01b0381351690602001356103ec565b604080519115158252519081900360200190f35b610142610452565b604080516001600160a01b039092168252519081900360200190f35b6101266004803603606081101561017457600080fd5b506001600160a01b03813581169160208101359091169060400135610476565b61014261065b565b6101c1600480360360408110156101b257600080fd5b50803515159060200135610674565b005b6101e9600480360360208110156101d957600080fd5b50356001600160a01b0316610844565b60408051918252519081900360200190f35b610142610863565b6101266004803603604081101561021957600080fd5b506001600160a01b038135169060200135610887565b6102376109c5565b6040805160029290920b8252519081900360200190f35b6101426109d5565b6101c16004803603606081101561026c57600080fd5b81359160208101359181019060608101604082013564010000000081111561029357600080fd5b8201836020820111156102a557600080fd5b803590602001918460018302840111640100000000831117156102c757600080fd5b5090925090506109f9565b6101e9600480360360408110156102e857600080fd5b506001600160a01b0381358116916020013516610b0c565b610308610b29565b6040805162ffffff9092168252519081900360200190f35b6103576004803603608081101561033657600080fd5b508035600290810b91602081013590910b9060408101359060600135610b34565b6040805192835260208301919091528051918290030190f35b6101c16004803603606081101561038657600080fd5b8135916020810135918101906060810160408201356401000000008111156103ad57600080fd5b8201836020820111156103bf57600080fd5b803590602001918460018302840111640100000000831117156103e157600080fd5b509092509050610d44565b3360008181526002602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b0383166000908152600260209081526040808320338452909152812054828110156104ef576040805162461bcd60e51b815260206004820152601660248201527f616c6c6f77616e636520696e73756666696369656e7400000000000000000000604482015290519081900360640190fd5b6001600160a01b03808616600090815260026020908152604080832033845282528083208786039055928716825260019052205480840181111561057a576040805162461bcd60e51b815260206004820152601a60248201527f6f766572666c6f772062616c616e636520726563697069656e74000000000000604482015290519081900360640190fd5b6001600160a01b03808616600090815260016020526040808220848801905591881681522054848110156105f5576040805162461bcd60e51b815260206004820152601860248201527f756e646572666c6f772062616c616e63652073656e6465720000000000000000604482015290519081900360640190fd5b6001600160a01b03808816600081815260016020908152604091829020898603905581518981529151938a16937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a3600193505050505b9392505050565b600054660100000000000090046001600160a01b031681565b60008060069054906101000a90046001600160a01b03166001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156106c357600080fd5b505afa1580156106d7573d6000803e3d6000fd5b505050506040513d60e08110156106ed57600080fd5b5051600054909150660100000000000090046001600160a01b031663128acb083085858161071e5785600101610723565b600186035b3360405160200180826001600160a01b031681526020019150506040516020818303038152906040526040518663ffffffff1660e01b815260040180866001600160a01b031681526020018515158152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156107c45781810151838201526020016107ac565b50505050905090810190601f1680156107f15780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b15801561081357600080fd5b505af1158015610827573d6000803e3d6000fd5b505050506040513d604081101561083d57600080fd5b5050505050565b6001600160a01b0381166000908152600160205260409020545b919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b33600090815260016020526040812054828110156108ec576040805162461bcd60e51b815260206004820152601460248201527f696e73756666696369656e742062616c616e6365000000000000000000000000604482015290519081900360640190fd5b3360009081526001602052604080822085840390556001600160a01b0386168252902054808401811115610967576040805162461bcd60e51b815260206004820152601a60248201527f726563697069656e742062616c616e6365206f766572666c6f77000000000000604482015290519081900360640190fd5b6001600160a01b03851660008181526001602090815260409182902084880190558151878152915133927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92908290030190a3506001949350505050565b6000546301000000900460020b81565b7f000000000000000000000000000000000000000000000000000000000000000081565b600054660100000000000090046001600160a01b03163314610a1a57600080fd5b600082826020811015610a2c57600080fd5b50356001600160a01b0316905030811415610aa8578415610a7257610a727f00000000000000000000000000000000000000000000000000000000000000003387610dee565b8315610aa357610aa37f00000000000000000000000000000000000000000000000000000000000000003386610dee565b61083d565b8415610ada57610ada7f0000000000000000000000000000000000000000000000000000000000000000823388610f4a565b831561083d5761083d7f0000000000000000000000000000000000000000000000000000000000000000823387610f4a565b600260209081526000928352604080842090915290825290205481565b60005462ffffff1681565b60008060008060069054906101000a90046001600160a01b03166001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b158015610b8657600080fd5b505afa158015610b9a573d6000803e3d6000fd5b505050506040513d60e0811015610bb057600080fd5b505190506000610bd382610bc38a6110b7565b610bcc8a6110b7565b89896113f6565b9050600080600060069054906101000a90046001600160a01b03166001600160a01b0316633c8a7d8d338c8c873360405160200180826001600160a01b031681526020019150506040516020818303038152906040526040518663ffffffff1660e01b815260040180866001600160a01b031681526020018560020b81526020018460020b8152602001836fffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610cae578181015183820152602001610c96565b50505050905090810190601f168015610cdb5780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b158015610cfd57600080fd5b505af1158015610d11573d6000803e3d6000fd5b505050506040513d6040811015610d2757600080fd5b50805160209091015198039a979096039850959650505050505050565b600054660100000000000090046001600160a01b03163314610d6557600080fd5b600082826020811015610d7757600080fd5b50356001600160a01b031690506000851315610db957610aa37f0000000000000000000000000000000000000000000000000000000000000000823388610f4a565b600084131561083d5761083d7f0000000000000000000000000000000000000000000000000000000000000000823387610f4a565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b1781529251825160009485949389169392918291908083835b60208310610e7f5780518252601f199092019160209182019101610e60565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610ee1576040519150601f19603f3d011682016040523d82523d6000602084013e610ee6565b606091505b5091509150818015610f14575080511580610f145750808060200190516020811015610f1157600080fd5b50515b61083d576040805162461bcd60e51b815260206004820152600260248201526114d560f21b604482015290519081900360640190fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b178152925182516000948594938a169392918291908083835b60208310610fe35780518252601f199092019160209182019101610fc4565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611045576040519150601f19603f3d011682016040523d82523d6000602084013e61104a565b606091505b5091509150818015611078575080511580611078575080806020019051602081101561107557600080fd5b50515b6110af576040805162461bcd60e51b815260206004820152600360248201526229aa2360e91b604482015290519081900360640190fd5b505050505050565b60008060008360020b126110ce578260020b6110d6565b8260020b6000035b9050620d89e8811115611114576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b60006001821661113557700100000000000000000000000000000000611147565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561117b576ffff97272373d413259a46990580e213a0260801c5b600482161561119a576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156111b9576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156111d8576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156111f7576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615611216576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615611235576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611255576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615611275576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615611295576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156112b5576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156112d5576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156112f5576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615611315576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615611335576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611356576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615611376576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615611395576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156113b2576b048a170391f7dc42444e8fa20260801c5b60008460020b13156113cd5780600019816113c957fe5b0490505b6401000000008106156113e15760016113e4565b60005b60ff16602082901c0192505050919050565b6000836001600160a01b0316856001600160a01b03161115611416579293925b846001600160a01b0316866001600160a01b0316116114415761143a8585856114cc565b90506114c3565b836001600160a01b0316866001600160a01b031610156114b55760006114688786866114cc565b90506000611477878986611538565b9050806fffffffffffffffffffffffffffffffff16826fffffffffffffffffffffffffffffffff16106114aa57806114ac565b815b925050506114c3565b6114c0858584611538565b90505b95945050505050565b6000826001600160a01b0316846001600160a01b031611156114ec579192915b6000611518856001600160a01b0316856001600160a01b03166c01000000000000000000000000611586565b90506114c361153384838888036001600160a01b0316611586565b611635565b6000826001600160a01b0316846001600160a01b03161115611558579192915b61157e611533836c010000000000000000000000008787036001600160a01b0316611586565b949350505050565b60008080600019858709868602925082811090839003039050806115bc57600084116115b157600080fd5b508290049050610654565b8084116115c857600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b806fffffffffffffffffffffffffffffffff8116811461085e57600080fdfea164736f6c6343000706000a";

export class MockUniswapV3Pool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockUniswapV3Pool> {
    return super.deploy(overrides || {}) as Promise<MockUniswapV3Pool>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockUniswapV3Pool {
    return super.attach(address) as MockUniswapV3Pool;
  }
  connect(signer: Signer): MockUniswapV3Pool__factory {
    return super.connect(signer) as MockUniswapV3Pool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockUniswapV3PoolInterface {
    return new utils.Interface(_abi) as MockUniswapV3PoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockUniswapV3Pool {
    return new Contract(address, _abi, signerOrProvider) as MockUniswapV3Pool;
  }
}
