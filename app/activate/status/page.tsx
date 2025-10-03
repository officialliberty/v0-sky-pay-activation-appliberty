"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterText } from "@/components/typewriter-text"

export default function StatusPage() {
  const router = useRouter()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 py-6 mb-8">
        <div className="w-10 h-10 relative">
          <Image src="/images/skypay-logo.jpg" alt="SkyPay Logo" fill className="object-contain" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">SkyPay Activation</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 space-y-6">
          {/* Error Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
          </div>

          {/* Error Message */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">Payment Not Received</h2>
            {showContent && (
              <p className="text-gray-600 leading-relaxed">
                <TypewriterText
                  text="We didn't receive any payment from you. Please retry the payment or contact support."
                  speed={30}
                />
              </p>
            )}
          </div>

          {/* Retry Button */}
          <Button
            onClick={() => router.push("/activate/payment")}
            className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white text-lg font-semibold py-6 rounded-2xl shadow-md transition-all duration-300"
          >
            Retry Payment
          </Button>
        </div>
      </div>
    </div>
  )
}
