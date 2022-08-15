import { useMarketplace, useActiveListings, MediaRenderer, useNetwork, useNetworkMismatch } from "@thirdweb-dev/react"
import Link from "next/link"
import ethLogo from '../public/eth-logo.svg'
import Image from "next/image"

const NFTCard = ({listing}) => {

    return (
        <div className="p-3 rounded-3xl shadow-2xl cursor-pointer">
            <MediaRenderer src={listing.asset.image} width={300} height={300} className="rounded-3xl" />
            <h2 className="font-bold">
                <div>
                    <div className="pt-3">{listing.asset.name}</div>
                </div>
            </h2>
            <div className="">
                <div className="pt-3">
                    <Image src={ethLogo} width={15} height={15}/>
                    <b className="font-light pl-1">{listing.buyoutCurrencyValuePerToken.displayValue}</b>
                </div>
            </div>
        </div>
    )
}

export default NFTCard