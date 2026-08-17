import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhammad Mudassir Azhar - Associate Software Engineer',
  description: 'Portfolio of Muhammad Mudassir Azhar - Associate Software Engineer specializing in FastAPI, Django, AWS, Docker, Terraform, and AI-powered applications.',
  keywords: 'Software Engineer, FastAPI, Django, AWS, Machine Learning, LLMs, Python, Portfolio',
  authors: [{ name: 'Muhammad Mudassir Azhar' }],
  creator: 'Muhammad Mudassir Azhar',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Muhammad Mudassir Azhar - Associate Software Engineer',
    description: 'Associate Software Engineer building scalable AI-powered applications & cloud solutions',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
