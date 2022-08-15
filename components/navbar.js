import Image from "next/image";
import Link from "next/link";
import Logo from '../public/logo.jpeg'
import {useMetamask, useAddress, useCoinbaseWallet, useWalletConnect} from "@thirdweb-dev/react";
import { Menu } from "@headlessui/react";

const Navbar = () => {
    const connectWallet = useMetamask()
    const address = useAddress()
    const connectCoinbase = useCoinbaseWallet()
    const connectWalletConnect = useWalletConnect()

    return (
        <div className="flex justify-between p-11">
            <Link href="https://mvrnft.netlify.app/">
                <div>
                    <Image className="cursor-pointer" src={Logo} alt="logo" width={125} height={35} />
                </div>
            </Link>
            <div>
                <div className="pb-1 flex justify-center">
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="inline-flex bg-none p-2 rounded-3xl border-black border-2">↓ Connect Wallet</Menu.Button>
                        <Menu.Items className="py-2">
                            <Menu.Item className="bg-slate-200 w-full text-left p-2 rounded-3xl">
                                {({active}) => (
                                    <div>
                                        <div className="py-1">
                                            <button onClick={connectWallet}>
                                                <h1 className="font-bold text-sm">Metamask</h1>
                                            </button>
                                        </div>
                                        <div className="bg-slate-400 w-full h-px"></div>
                                        <div className="py-1">
                                            <button onClick={connectCoinbase}>
                                                <h1 className="font-bold text-sm">Coinbase</h1>
                                            </button>
                                        </div>
                                        <div className="bg-slate-400 w-full h-px"></div>
                                        <div className="py-1"> 
                                            <button onClick={connectWalletConnect}>
                                                <h1 className="font-bold text-sm">WalletConnect</h1>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>

                <div className="pb-1 flex justify-center">
                    <div className="bg-none p-2 text-black rounded-3xl border-black border-2 hover:bg-black hover:text-white">
                        <Link href="https://thirdweb.com/goerli/nft-collection/0x702Fd82012d5995E2F23c61f5045BC170679069e">
                            Ownerships
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar