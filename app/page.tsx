import MintButton from "@/components/MintButton"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function NFTMintPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-2 items-center px-4 py-8 sm:py-16 relative z-10">
        {/* Left side: NFT Drop Details */}
        <div className="w-full lg:w-1/2 text-gray-300">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white mb-4 sm:mb-6">
            keyless, gasless.
          </h1>
          <div className="space-y-3 sm:space-y-4">
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-400">
              Mint an NFT for free on{" "}
              <Link href="https://docs.abs.xyz/how-abstract-works"
                className="text-emerald-500 hover:underline transition-all duration-200"
                target="_blank">
                Abstract</Link>
              {" "} using{" "}
              <Link href="https://docs.abs.xyz/how-abstract-works/native-account-abstraction/overview"
                target="_blank"
                className="text-emerald-500 hover:underline transition-all duration-200"
              >
                Native Account Abstraction
              </Link>.
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                <span className="text-gray-400">
                  Uses{" "}
                  <Link href="https://abs.xyz/blog/articles/how-passkey-wallets-work"
                    target="_blank"
                    className="text-emerald-500 hover:underline transition-all duration-200"
                  >
                    passkeys
                  </Link>
                  {" "}to secure keypair generation.
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                <span className="text-gray-400">
                  Uses{" "}
                  <Link href="https://docs.abs.xyz/how-abstract-works/native-account-abstraction/paymasters"
                    target="_blank"
                    className="text-emerald-500 hover:underline transition-all duration-200"
                  >
                    paymasters
                  </Link>{" "}
                  for gasless transactions.
                </span>
              </li>
            </ul>

            <MintButton />

          </div>
        </div>

        {/* Right side: NFT Card */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
          {/* Blue radial gradient behind the card */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,rgba(59,130,246,0)_70%)] blur-2xl"></div>

          <Card className="relative backdrop-blur-xl bg-black/30 border-white/10 shadow-2xl overflow-hidden">
            <CardContent className="p-4 sm:p-8 relative">
              <div className="absolute inset-0 -m-10 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_0%,rgba(16,185,129,0)_70%)]"></div>

              <div className="aspect-square max-w-lg mx-auto mb-6 sm:mb-8 rounded-md overflow-hidden relative">
                {/* Radial gradient behind the image */}
                <Image
                  width={600}
                  height={600}
                  quality={100}
                  src="/abs.png"
                  alt="Emerald Whispers NFT"
                  priority
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}