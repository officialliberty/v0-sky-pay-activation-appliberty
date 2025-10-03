"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { TypewriterText } from "@/components/typewriter-text"

export default function VerifyPage() {
  const router = useRouter()
  const [stage, setStage] = useState<"processing" | "verifying" | "confirming">("processing")
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Show text after brief delay
    setTimeout(() => setShowText(true), 300)

    // Processing stage (4 seconds)
    const processingTimer = setTimeout(() => {
      setStage("verifying")
      setShowText(false)
      setTimeout(() => setShowText(true), 300)
    }, 4000)

    // Verifying stage (4 seconds)
    const verifyingTimer = setTimeout(() => {
      setStage("confirming")
      setShowText(false)
      setTimeout(() => setShowText(true), 300)
    }, 8000)

    // Confirming stage (4 seconds) then redirect
    const confirmingTimer = setTimeout(() => {
      router.push("/activate/status")
    }, 12000)

    return () => {
      clearTimeout(processingTimer)
      clearTimeout(verifyingTimer)
      clearTimeout(confirmingTimer)
    }
  }, [router])

  const getStageText = () => {
    switch (stage) {
      case "processing":
        return "Processing your information"
      case "verifying":
        return "Verifying Your payment"
      case "confirming":
        return "Confirming payment..."
      default:
        return "Processing"
    }
  }

  return (
    <div className="min-h-screen bg-[#2B7FFF] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 p-6">
        <div className="w-10 h-10 relative">
          <Image src="/images/skypay-logo.jpg" alt="SkyPay Logo" fill className="object-contain" />
        </div>
        <h1 className="text-xl font-bold text-white">SkyPay Activation</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
        {/* Loading Spinner */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Status Text */}
        <div className="text-center space-y-2">
          {showText && (
            <h2 className="text-2xl font-semibold text-white">
              <TypewriterText text={getStageText()} speed={50} />
            </h2>
          )}
        </div>
      </div>

      {/* Bottom Card (only show in confirming stage) */}
      {stage === "confirming" && (
        <div className="p-6">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <p className="text-gray-900 font-medium">
                {showText && <TypewriterText text="Confirming payment..." speed={50} />}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
