// app/layout.tsx
import './globals.css'
import { Inter, Italiana } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const italiana = Italiana({ subsets: ['latin'], weight: '400', variable: '--font-italiana' })

export const metadata = {
  title: 'Sithija Karunasena',
  description: 'Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${italiana.variable} bg-[#ffffff]`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
