import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { SupportWidget } from "@/components/support-widget"

export const metadata: Metadata = {
  title: "SkyPay Activation - Start Earning Big",
  description: "Welcome to the best earning site SkyPay. We are trusted and fast in crediting.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <SupportWidget />
        <Analytics />
      </body>
    </html>
  )
}
