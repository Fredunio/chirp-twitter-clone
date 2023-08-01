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
import { Database } from '@/lib/database.types'
import PostChirp from '@/components/Layout/PostChirp/PostChirp'
import { TProfile } from '@/types/general-types'

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

export default async function Home() {
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

    // if (!session) {
    //     redirect('/unauthenticated')
    // }
    return (
        <main className="relative flex flex-col min-h-screen border-x-1 border-dimmed-color main-content">
            <MainHeader userProfile={userProfile} />

            <MainPagePostSection>
                <PostChirp userProfile={userProfile} />
                {posts?.map((post) => (
                    <Post userProfile={userProfile} key={post.id} post={post} />
                ))}
            </MainPagePostSection>
        </main>
    )
}
