"use client"

import { useState } from "react"
import { MessageCircle, Mail, Send, X } from "lucide-react"

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const supportOptions = [
    {
      name: "Email Support",
      icon: Mail,
      action: () => {
        window.location.href = "mailto:support@skypay.com"
      },
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      action: () => {
        window.open("https://wa.me/1234567890", "_blank")
      },
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Telegram",
      icon: Send,
      action: () => {
        window.open("https://t.me/skypaysupport", "_blank")
      },
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ]

  return (
    <>
      {/* Support Options Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3 animate-in slide-in-from-bottom-5 fade-in duration-300">
          {supportOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <button
                key={option.name}
                onClick={() => {
                  option.action()
                  setIsOpen(false)
                }}
                className={`${option.color} text-white rounded-full p-4 shadow-lg flex items-center gap-3 pr-6 transition-all hover:scale-105 animate-in slide-in-from-bottom-3 fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-6 w-6" />
                <span className="font-medium text-sm">{option.name}</span>
              </button>
            )
          })}
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 z-50 bg-[#F5B800] hover:bg-[#d9a500] text-black rounded-full p-4 shadow-2xl transition-all hover:scale-110 active:scale-95"
        aria-label="Support"
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
