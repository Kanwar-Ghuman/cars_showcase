import './globals.css'
import { Footer, Navbar } from '@/components'


export const metadata = {
  title: 'Car Land',
  description: 'Discover the best cars in the market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
