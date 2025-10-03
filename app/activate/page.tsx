"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ActivatePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    accountNumber: "",
    skyCodeUsername: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("activationData", JSON.stringify(formData))
    router.push("/activate/payment")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1810] to-[#2d2416] flex flex-col p-6">
      <div className="w-full max-w-2xl mx-auto space-y-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-[#F5B800] hover:bg-white/10 rounded-full p-3">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <div className="w-32 h-16 relative">
            <Image src="/images/skypay-logo.jpg" alt="SkyPay Logo" fill className="object-contain" />
          </div>
          <div className="w-12" /> {/* Spacer for centering */}
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-[#2d2416] to-[#1a1810] rounded-3xl p-8 border border-[#3d3416] shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#F5B800] mb-3">Activate Your Account</h1>
            <p className="text-white/70 text-lg">Fill in your details to get started with SkyPay</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white text-base font-medium">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="bg-[#1a1810] border-[#3d3416] text-white placeholder:text-white/40 h-14 rounded-2xl text-lg focus:border-[#F5B800] focus:ring-[#F5B800]"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-base font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-[#1a1810] border-[#3d3416] text-white placeholder:text-white/40 h-14 rounded-2xl text-lg focus:border-[#F5B800] focus:ring-[#F5B800]"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountNumber" className="text-white text-base font-medium">
                Account Number
              </Label>
              <Input
                id="accountNumber"
                name="accountNumber"
                type="text"
                required
                value={formData.accountNumber}
                onChange={handleChange}
                className="bg-[#1a1810] border-[#3d3416] text-white placeholder:text-white/40 h-14 rounded-2xl text-lg focus:border-[#F5B800] focus:ring-[#F5B800]"
                placeholder="Enter your account number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skyCodeUsername" className="text-white text-base font-medium">
                Sky Code Username
              </Label>
              <Input
                id="skyCodeUsername"
                name="skyCodeUsername"
                type="text"
                required
                value={formData.skyCodeUsername}
                onChange={handleChange}
                className="bg-[#1a1810] border-[#3d3416] text-white placeholder:text-white/40 h-14 rounded-2xl text-lg focus:border-[#F5B800] focus:ring-[#F5B800]"
                placeholder="Enter your Sky Code username"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#F5B800] hover:bg-[#d9a500] text-black text-xl font-bold py-7 rounded-3xl shadow-lg transition-all duration-300 hover:scale-[1.02] mt-8"
            >
              Activate Account
            </Button>
          </form>
        </div>

        {/* Footer text */}
        <p className="text-center text-white/60 text-sm">
          By activating your account, you agree to SkyPay's terms and conditions
        </p>
      </div>
    </div>
  )
}
