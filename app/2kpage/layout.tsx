import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../../styles/2kpage.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GamingZone 2000 - Your #1 Source for Online Games!",
  description: "Experience the nostalgic feel of 2000s online gaming stores",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

