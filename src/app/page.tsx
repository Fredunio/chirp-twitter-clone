import LeftSidebar from '@/components/Layout/LeftSidebar/LeftSidebar'
import MainHeader from '@/components/Layout/MainHeader/MainHeader'
import MainPagePostSection from '@/components/Layout/MainPagePostSection/MainPagePostSection'
import RightSidebar from '@/components/Layout/RightSidebar/RightSidebar'
import WelcomeChirp from '@/components/Layout/WelcomeChirp/WelcomeChirp'
import Post from '@/components/Post/Post'
import Link from 'next/link'
import {
    AiFillHome,
    AiOutlineSearch,
    AiOutlineBell,
    AiOutlineMail,
    AiOutlineUser,
    AiOutlineEllipsis,
} from 'react-icons/ai'
import { PiBookmarkSimple } from 'react-icons/pi'

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

export default function Home() {
    return (
        <div className="grid  grid-cols-[1fr,min(80rem,100%),1fr]">
            {/* TODO: add min values to grid below */}
            <div className="col-start-2 gap-8 grid grid-cols-[1.4fr,3.4fr,2fr]">
                <LeftSidebar navbarItems={navbarItems} />
                <main className="relative flex flex-col min-h-screen border-x-1 border-dimmed-color main-content">
                    <MainHeader />

                    <MainPagePostSection>
                        <WelcomeChirp />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </MainPagePostSection>
                </main>
                <RightSidebar />
            </div>
        </div>
    )
}
