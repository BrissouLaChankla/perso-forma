import Navbar from '@/components/Menu/Navbar'
import Footer from '@/components/Menu/Footer'

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
