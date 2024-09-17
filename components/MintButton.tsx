'use client'

import React, { useState, useEffect } from 'react'
import { useConnect, useActiveAccount, useSendTransaction, useSwitchActiveWalletChain } from 'thirdweb/react'
import { createThirdwebClient, getContract, prepareContractCall, ZERO_ADDRESS } from 'thirdweb'
import { inAppWallet } from "thirdweb/wallets"
import { hasStoredPasskey } from 'thirdweb/wallets/in-app'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { abstractTestnet } from 'thirdweb/chains'
import { NFT_CONTRACT_ADDRESS, PAYMASTER_ADDRESS } from '@/lib/const'
import Link from 'next/link'

const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
})

const wallet = inAppWallet({ auth: { options: ["passkey"], } })

export default function MintButton() {
    const account = useActiveAccount()
    const switchChain = useSwitchActiveWalletChain();
    const { connect } = useConnect()
    const { mutateAsync: sendTransaction } = useSendTransaction({
        payModal: false,
    });
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [buttonText, setButtonText] = useState<string>('Connect with Passkey')
    const [transactionHash, setTransactionHash] = useState<string | null>(null)

    useEffect(() => {
        console.log('Account:', account);
        setButtonText(!!account ? 'Mint NFT' : 'Connect with Passkey')
    }, [account])

    const connectWithPasskey = async () => {
        setIsLoading(true)
        try {
            if (!account) {
                // Connect with passkey
                await connect(async () => {
                    const hasPasskey = await hasStoredPasskey(client)
                    setButtonText(hasPasskey ? 'Signing in...' : 'Creating passkey...')
                    await wallet.connect({
                        client,
                        strategy: "passkey",
                        type: hasPasskey ? "sign-in" : "sign-up",
                    })
                    return wallet
                })
                setButtonText('Mint NFT')

            }

            await switchChain(abstractTestnet);
        } catch (error) {
            console.error('Error connecting:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const mintNFT = async () => {
        if (!account) {
            await connectWithPasskey();
        }

        await switchChain(abstractTestnet);

        try {
            setIsLoading(true)
            setTransactionHash(null)
            setButtonText('Minting NFT...')

            const contract = getContract({
                client,
                chain: abstractTestnet,
                address: NFT_CONTRACT_ADDRESS,
            });

            const transaction = prepareContractCall({
                contract,
                method: "function mint(address to, uint256 qty)",
                params: [account?.address || ZERO_ADDRESS, BigInt(1)],
                eip712: {
                    paymaster: PAYMASTER_ADDRESS,
                    paymasterInput: `0x8c5a344500000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000`,
                },
            });

            const result = await sendTransaction(transaction);
            setTransactionHash(result.transactionHash);
            setButtonText('NFT Minted! Mint another?')
        }
        catch (error) {
            console.error('Error minting NFT:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='flex flex-col space-y-4'>
            <Button
                variant="default"
                onClick={!account ? connectWithPasskey : mintNFT}
                disabled={isLoading}
                className="w-full md:w-3/4 bg-white text-gray-800 hover:bg-gray-100 font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 border border-gray-200"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin text-gray-600" />
                        {buttonText}
                    </>
                ) : (
                    buttonText
                )}
            </Button>

            {
                transactionHash && (
                    <Link
                        href={`https://explorer.testnet.abs.xyz/tx/${transactionHash}`}
                        target="_blank" className="text-emerald-500 hover:underline transition-all duration-200">
                        View transaction on the block explorer
                    </Link>
                )
            }
        </div>
    )
}