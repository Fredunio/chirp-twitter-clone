import { TProfile } from '@/types/general-types'
import Image from 'next/image'
import Link from 'next/link'
import { BiBadgeCheck, BiUser } from 'react-icons/bi'
import { PiBookmarkSimple } from 'react-icons/pi'
import { RiFileList3Line } from 'react-icons/ri'
import { LuUsers } from 'react-icons/lu'
import { FaMoneyBillWave } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

const navbarItems = [
    {
        name: 'Profile',
        icon: BiUser,
        href: '/',
    },
    {
        name: 'Yellow',
        icon: BiBadgeCheck,
        href: '/',
    },
    {
        name: 'Lists',
        icon: RiFileList3Line,
        href: '/',
    },

    {
        name: 'Bookmarks',
        icon: PiBookmarkSimple,
        href: '/',
    },
    {
        name: 'Communities',
        icon: LuUsers,
        href: '/',
    },
    {
        name: 'Monetization',
        icon: FaMoneyBillWave,
        href: '/',
    },
]

export default function MobileDrawer({
    userProfile,
    isOpen,
    setIsOpen,
}: {
    userProfile: TProfile | null
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const openClass = 'translate-x-0 ease-out'
    const closeClass = '-translate-x-full ease-in'

    return (
        <section
            className={`
            ${isOpen ? '' : 'opacity-0 pointer-events-none'}
             fixed w-full z-50 h-screen top-0 left-0 sm:hidden transition-all duration-300`}
            onClick={(e) => {
                setIsOpen(false)
                console.log('clicked')
                e.stopPropagation()
            }}
        >
            <div className={`overlay h-full w-full  bg-neutral-200/10  `}>
                <div
                    className={`${
                        isOpen ? openClass : closeClass
                    } transition-all duration-300 menu h-full w-64 flex flex-col shadow-sm  bg-neutral-950 border-r-1 border-dimmed-color`}
                >
                    <div className="p-4 ">
                        <div className="flex justify-between items-start">
                            <button>
                                {userProfile && (
                                    <Image
                                        src={userProfile?.avatar}
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                )}
                            </button>
                            <button
                                type="button"
                                title="Add Account"
                                className="rounded-full border-1 p-2"
                            >
                                <AiOutlinePlus />
                            </button>
                        </div>

                        <div className="mt-2 flex flex-col">
                            <Link
                                className="hover:underline"
                                prefetch={false}
                                href={'/'}
                            >
                                <span className="font-semibold text-xl">
                                    {userProfile?.username}
                                </span>
                            </Link>
                            <Link prefetch={false} href={'/'}>
                                <span className="font-light  text-neutral-400">
                                    {userProfile?.email}
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-8 mt-4 font-light text-neutral-400">
                            <Link className="hover:underline" href={'/'}>
                                <p>
                                    <span className="font-semibold mr-2 text-neutral-100">
                                        31
                                    </span>
                                    Following
                                </p>
                            </Link>
                            <Link className="hover:underline" href={'/'}>
                                <p>
                                    <span className="font-semibold mr-2 text-neutral-100">
                                        2
                                    </span>
                                    Followers
                                </p>
                            </Link>
                        </div>
                    </div>
                    <nav className="flex w-full mt-2 flex-col">
                        {navbarItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 w-full font-semibold py-4 text-xl transition-colors duration-100 rounded-lg hover:bg-neutral-800 hover:text-primary-300 active:bg-neutral-700 active:text-primary-400"
                            >
                                <div className="flex items-center  gap-4">
                                    <span>
                                        <item.icon size={24} />
                                    </span>
                                    <span className="">{item.name}</span>
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    )
}
