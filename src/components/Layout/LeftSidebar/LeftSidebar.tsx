import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { BiDotsVertical } from 'react-icons/bi'
import { GiBirdTwitter } from 'react-icons/gi'

export default function LeftSidebar({
    navbarItems,
}: {
    navbarItems: {
        name: string
        icon: IconType
        href: string
    }[]
}) {
    return (
        <aside className="sticky top-0 flex flex-col justify-between h-screen py-4 w-60">
            <div className="flex flex-col ">
                <Link href={'/'} className="">
                    <span className="flex items-end gap-2 pl-2 text-3xl leading-8 group">
                        <GiBirdTwitter
                            size={36}
                            className="text-primary group-hover:text-primary-hover group-active:text-primary-active"
                        />
                        <span className="font-pacifico">Chiwi</span>
                    </span>
                </Link>
                <nav className="flex flex-col pt-8 space-y-2">
                    {navbarItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-2 py-2 text-xl transition-colors duration-100 rounded-lg hover:bg-neutral-900 hover:text-primary-300 active:bg-neutral-800 active:text-primary-400"
                        >
                            <div className="flex items-center gap-4">
                                <span>
                                    <item.icon size={24} />
                                </span>
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    ))}
                </nav>
                <button
                    type="button"
                    className="px-4 py-2 mt-4 text-xl font-bold transition-colors duration-100 rounded-full text-neutral-800 bg-primary hover:bg-primary-hover active:bg-primary-active"
                >
                    Chirp
                </button>
            </div>
            <button className="flex items-center w-full gap-8 px-4 py-2 mt-auto text-lg rounded-full hover:bg-neutral-800">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-secondary"></div>
                    <div className="leading-6">
                        <div className="font-bold">ChiwiTeam</div>
                        <div className="text-neutral-500">@chiwi_team</div>
                    </div>
                </div>
                <BiDotsVertical size={24} className="ml-auto" />
            </button>
        </aside>
    )
}
