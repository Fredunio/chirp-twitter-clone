import '../styles/globals.css'
import type { Metadata } from 'next'
import { Cabin, Inter, Pacifico, Roboto } from 'next/font/google'
import SupabaseProvider from './supabase-provider'
import { Toaster } from 'react-hot-toast'
import { Database } from '@/lib/database.types'
import { TProfile } from '@/types/general-types'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import LeftSidebar from '@/components/Layout/LeftSidebar/LeftSidebar'
import MainHeader from '@/components/Layout/MainHeader/MainHeader'
import MainPagePostSection from '@/components/Layout/MainPagePostSection/MainPagePostSection'
import RightSidebar from '@/components/Layout/RightSidebar/RightSidebar'
import Post from '@/components/Post/Post'
import {
    AiFillHome,
    AiOutlineSearch,
    AiOutlineBell,
    AiOutlineMail,
    AiOutlineUser,
    AiOutlineEllipsis,
} from 'react-icons/ai'
import { PiBookmarkSimple } from 'react-icons/pi'
import AuthModal from '@/components/Modals/AuthModal/AuthModal'
import PostChirp from '@/components/Layout/PostChirp/PostChirp'

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

const navbarItems = [
    {
        name: 'Home',
        icon: AiFillHome,
        href: '/',
    },
    {
        name: 'Explore',
        icon: AiOutlineSearch,
        href: '/explore',
    },
    {
        name: 'Notifications',
        icon: AiOutlineBell,
        href: '/notifications',
    },
    {
        name: 'Messages',
        icon: AiOutlineMail,
        href: '/messages',
    },
    {
        name: 'Bookmarks',
        icon: PiBookmarkSimple,
        href: '/bookmarks',
    },

    {
        name: 'Profile',
        icon: AiOutlineUser,
        href: '/profile',
    },
    {
        name: 'More',
        icon: AiOutlineEllipsis,
        href: '/more',
    },
]

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = createServerComponentClient<Database>({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    const { data: posts, error } = await supabase.rpc('get_posts_pagination')

    let userProfile: TProfile | null = null
    if (session) {
        const { data: profileData, error: profileError } = await supabase
            .from('profile')
            .select('*')
            .eq('id', session?.user?.id)
            .single()
        userProfile = profileData
    }

    return (
        <html lang="en">
            <body
                className={`${roboto.variable} ${pacifico.variable} font-roboto scroll-smooth`}
            >
                {!session && <AuthModal />}

                <Toaster position="top-center" />
                <SupabaseProvider>
                    <div className="grid relative  grid-cols-[1fr,min(80rem,100%),1fr]">
                        <div className="col-start-2  gap-0 lg:gap-8 grid grid-cols-1 sm:grid-cols-[0.1fr,3.4fr] lg:grid-cols-[1.4fr,3.4fr,2fr]">
                            <LeftSidebar navbarItems={navbarItems} />
                            {children}
                            <RightSidebar />
                        </div>
                    </div>
                </SupabaseProvider>
            </body>
        </html>
    )
}
