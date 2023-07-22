import LeftSidebar from '@/components/Layout/LeftSidebar/LeftSidebar'
import MainHeader from '@/components/Layout/MainHeader/MainHeader'
import MainPagePostSection from '@/components/Layout/MainPagePostSection/MainPagePostSection'
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

function TopNavbarLink({ name, href }: { name: string; href: string }) {
    return (
        <Link
            href={href}
            // decoration-primary hover:underline
            className="flex justify-center w-full py-4 font-semibold text-center transition-colors duration-100 hover:backdrop-blur-lg hover:bg-white/10 "
        >
            <span>{name}</span>
        </Link>
    )
}

export default function Home() {
    return (
        <div className="grid  grid-cols-[1fr,min(65rem,100%),1fr]">
            {/* GiEgyptianBird */}
            {/* left sidebar */}
            <div className="col-start-2 gap-4 grid grid-cols-[1fr,4fr,1fr]">
                <LeftSidebar navbarItems={navbarItems} />
                <main className="relative flex flex-col min-h-screen pt-2 border-x-1 border-dimmed-color main-content">
                    <MainHeader />
                    {/* <h1 className="px-4 text-2xl font-bold">Home</h1>
                    <div className="flex items-center w-full mt-6 backdrop-blur-md border-b-1 border-dimmed-color decoration-4 underline-offset-8 justify-evenly">
                        <TopNavbarLink name="For You" href="/top" />
                        <TopNavbarLink name="Following" href="/following" />
                    </div>
                    <div className="flex px-4 py-2 border-b-1 border-dimmed-color">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-secondary"></div>
                        </div>
                        <div className="flex flex-col w-full px-4 ">
                            <div className="flex flex-col border-b-1 border-dimmed-color">
                                <input
                                    className="px-2 py-2 text-2xl placeholder-gray-500 bg-transparent"
                                    placeholder="What's chirping?"
                                    type="text"
                                />
                                <button className="flex items-center self-start gap-2 my-4 text-primary">
                                    <BiWorld size={18} />
                                    Everybirdy can reply
                                </button>
                            </div>
                            <div className="flex items-center justify-between pt-2">
                                <div>icons</div>
                                <ChirpButton />
                            </div>
                        </div>
                    </div> */}
                    <MainPagePostSection>
                        <WelcomeChirp />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </MainPagePostSection>
                </main>
                <aside className="pt-2 right-sidebar">Right Sidebar</aside>
            </div>
        </div>
    )
}
