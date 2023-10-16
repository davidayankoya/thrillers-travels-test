import MainLayout from '@/layouts/MainLayout'
import './globals.css'
import { Inter, Assistant } from 'next/font/google'
import { Providers } from './providers'

const font = Assistant({ subsets: ['latin'] })

export const metadata = {
  title: 'Mima Booking',
  description: 'Rent and purchase shortlets, apartments that suit your taste.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${font.className} scroll-custom`}>
                <Providers>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </Providers>
            </body>
        </html>
  )
}
