import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhammad Mudassir Azhar - AI Engineer & Data Analyst',
  description: 'Portfolio of Muhammad Mudassir Azhar - AI Engineer, Machine Learning Expert, and Data Analyst from Lahore, Pakistan. Showcasing projects in computer vision, NLP, and data science.',
  keywords: 'AI Engineer, Machine Learning, Data Science, Computer Vision, NLP, Python, React, Portfolio',
  authors: [{ name: 'Muhammad Mudassir Azhar' }],
  creator: 'Muhammad Mudassir Azhar',
  openGraph: {
    title: 'Muhammad Mudassir Azhar - AI Engineer Portfolio',
    description: 'AI Engineer and Machine Learning Expert specializing in computer vision, NLP, and data analysis',
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
