import '../styles/globals.css'
import type { Metadata } from 'next'
import { Cabin, Inter, Pacifico, Roboto } from 'next/font/google'

const pacifico = Pacifico({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-pacifico',
})

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['100', '300', '400', '500', '700', '900'],
})

const cabin = Cabin({
    subsets: ['latin'],
    variable: '--font-cabin',
    weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: 'Chirp',
    description: 'A Twitter clone built with Next.js and Prisma.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} ${pacifico.variable} font-roboto scroll-smooth`}
            >
                {children}
            </body>
        </html>
    )
}
