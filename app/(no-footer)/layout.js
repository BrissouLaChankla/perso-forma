import Navbar from '@/components/Menu/Navbar'
import Footer from '@/components/Menu/Footer'

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
        {children}
    </>
  )
}
