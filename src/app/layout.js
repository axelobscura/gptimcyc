import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asistente Concreton del Cemento y Concreto',
  description: 'Inteligencia artificial para la construcción desarrollada por el Instituto Mexicano del Cemento y del Concreto, A.C. (IMCYC)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
