import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bean 3D Model - Cursor Controlled',
  description: 'Interactive 3D bean model controlled by cursor movement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

