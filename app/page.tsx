import { Button } from "@/components/ui/button"
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
                  className="w-full h-full object-cover relative z-10"
                />
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Button
                  className="relative w-full px-8 py-3 bg-black rounded-full leading-none flex items-center justify-center space-x-5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white font-semibold">Mint Your NFT</span>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4 sm:mt-6 text-center text-gray-400">
                Limited edition. Only 100 available.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}