import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReduxProvider } from '@/redux/reduxProvider'
import './globals.css'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Supermarket',
  description:
    'Supermarket es una plataforma de comercio electrónico que permite a los usuarios comprar productos de supermercado en línea. Es un proyecto para la materia de programación avanzada',
  keywords: 'Supermarket, supermercado, ecommerce, nextjs, tailwindcss',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <ReduxProvider>
        <body className={`dark ${montserrat.className} min-h-screen`}>
          {children}
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  )
}
