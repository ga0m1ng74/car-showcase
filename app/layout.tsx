import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best cat in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative select-none'>
        <Navbar /> 
        {children}
        <Footer /> 
      </body>
    </html>
  )
}
