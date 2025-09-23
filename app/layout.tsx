import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'MailMap',
  description: 'Directory of newsletters',
  generator: 'MailMap',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8RX50CV49H" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-8RX50CV49H');
        `}
        </Script>
      </body>
    </html>
  )
}
