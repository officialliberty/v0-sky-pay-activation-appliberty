import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1810] to-[#2d2416] flex flex-col items-center justify-between p-6 pb-8">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center flex-1 space-y-8">
        {/* Logo */}
        <div className="w-48 h-24 relative">
          <Image src="/images/skypay-logo.jpg" alt="SkyPay Logo" fill className="object-contain" priority />
        </div>

        {/* Card with question */}
        <div className="w-full bg-gradient-to-br from-[#2d2416] to-[#1a1810] rounded-3xl p-8 border border-[#3d3416] shadow-2xl">
          <h2 className="text-5xl font-bold text-center mb-6 text-[#F5B800]">SkyPay</h2>
          <p className="text-white text-2xl text-center mb-8 font-medium">Would you rather have?</p>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#F5B800] rounded-3xl px-8 py-6 text-center flex-1">
              <p className="text-black text-2xl font-bold">₦10K</p>
              <p className="text-black text-lg font-semibold">Right Now</p>
            </div>
            <span className="text-[#F5B800] text-4xl font-bold">?</span>
            <div className="bg-[#F5B800] rounded-3xl px-8 py-6 text-center flex-1">
              <p className="text-black text-2xl font-bold">₦120K</p>
              <p className="text-black text-lg font-semibold">after 10 months</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">It is time to start earning big</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Welcome to the best earning site SkyPay. We are trusted and fast in crediting. We are here to help and
            support the interested once.
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/activate" className="w-full max-w-2xl">
          <Button className="w-full bg-[#F5B800] hover:bg-[#d9a500] text-black text-2xl font-bold py-8 rounded-3xl shadow-lg transition-all duration-300 hover:scale-[1.02]">
            Start
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </Link>
      </div>

      {/* Footer logo */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-semibold">S</span>
          <span className="text-white text-sm">SkyPay</span>
        </div>
      </div>
    </div>
  )
}
