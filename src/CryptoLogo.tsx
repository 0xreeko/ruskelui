import React, { HTMLAttributes } from 'react'
import { avatarSize, cryptoType } from './utils'
// @ts-ignore
import styles from './modules/Avatar.module.css'

export interface Props extends HTMLAttributes<HTMLImageElement> {
    /** Choose one the scalar options for Avatar */
    size: avatarSize
    /** Provide an image for Avatar */
    chain: cryptoType;
}

const sizeVar: { [key in avatarSize]: string } = {
    6: "w-6 h-7",
    7: "w-7 h-7",
    8: "w-8 h-8",
    9: "w-9 h-9",
    10: "w-10 h-10",
    11: "w-11 h-11",
    12: "w-12 h-12",
    14: "w-14 h-14",
    16: "w-16 h-16",
    20: "w-20 h-20",
    24: "w-24 h-24",
}

const cryptoVar: { [key in cryptoType]: string[]} = {
    btc: ["https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022", "btc logo"],
    eth: ["https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022", "eth logo"],
    usdt: ["https://cryptologos.cc/logos/tether-usdt-logo.svg?v=022", "usdt logo"],
    usdc: ["https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=022", "usdc logo"],
    xrp: ["https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022", "xrp logo"],
    sol: ["https://cryptologos.cc/logos/solana-sol-logo.svg?v=022", "sol logo"],
    luna: ["https://cryptologos.cc/logos/terra-luna-luna-logo.svg?v=022", "luna logo"],
    avax: ["https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=022", "avax logo"],
    dot: ["https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=022", "dot logo"],
    matic: ["https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022", "matic logo"],
    cro: ["https://cryptologos.cc/logos/crypto-com-coin-cro-logo.svg?v=022", "cro logo"],
    dai: ["https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=022", "dai logo"],
    atom: ["https://cryptologos.cc/logos/cosmos-atom-logo.svg?v=022", "atom logo"],
    near: ["https://cryptologos.cc/logos/near-protocol-near-logo.svg?v=022", "near logo"],
    algo: ["https://cryptologos.cc/logos/algorand-algo-logo.svg?v=022", "algo logo"],
    xlm: ["https://cryptologos.cc/logos/stellar-xlm-logo.svg?v=022", "xlm logo"],
    ftm: ["https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=022", "ftm logo"],
    miota: ["https://cryptologos.cc/logos/iota-miota-logo.svg?v=022", "miota logo"],
    one: ["https://cryptologos.cc/logos/harmony-one-logo.svg?v=022", "one logo"],
    aave: ["https://cryptologos.cc/logos/aave-aave-logo.svg?v=022", "aave logo"],
    celo: ["https://cryptologos.cc/logos/celo-celo-logo.svg?v=022", "celo logo"],
    ens: ["https://cryptologos.cc/logos/ethereum-name-service-ens-logo.svg?v=022", "ens logo"],
    hbar: ["https://cryptologos.cc/logos/hedera-hbar-logo.svg?v=022", "hbar logo"]
 
}
 
export const RuiCryptoLogo = ({ size = 6, chain = "xrp" }: Props) => {
    return (
            <div className={`overflow-hidden ${sizeVar[size]} bg-transparent inline-flex justify-center items-center`}>
                <img src={cryptoVar[chain][0]} alt={cryptoVar[chain][1]} />
            </div>
    )

}