'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { BiWorld } from 'react-icons/bi'
import ChirpButton from '../../Buttons/ChirpButton/ChirpButton'
import { GiBirdTwitter } from 'react-icons/gi'
import { useSupabase } from '@/app/supabase-provider'
import Image from 'next/image'
import { TProfile } from '@/types/general-types'
import MobileProfileButton from './MobileProfileButton'
import MobileDrawer from '../MobileDrawer/MobileDrawer'

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

export default function MainHeader({
    userProfile,
}: {
    userProfile: TProfile | null
}) {
    const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
    return (
        <>
            <MobileDrawer
                setIsOpen={setIsMobileOpen}
                isOpen={isMobileOpen}
                userProfile={userProfile}
            />
            <div className="sticky z-[2]  top-0 w-full pt-4 backdrop-blur-md">
                <h1 className="px-4 text-xl relative z-[1] w-full flex items-center  font-bold">
                    <div className="hidden sm:inline">Home</div>
                    <MobileProfileButton
                        onClick={() => {
                            setIsMobileOpen(true)
                            console.log('clicked')
                        }}
                        avatar={userProfile?.avatar}
                    />
                    <Link href={'/'} className="mx-auto  block sm:hidden">
                        <span className="flex items-end gap-2 pl-2 text-3xl leading-8 group">
                            <GiBirdTwitter
                                size={36}
                                className="text-primary group-hover:text-primary-hover group-active:text-primary-active"
                            />
                        </span>
                    </Link>
                </h1>
                <div className="flex items-center w-full mt-4 border-b-1 border-dimmed-color decoration-4 underline-offset-8 justify-evenly">
                    <TopNavbarLink name="For You" href="/top" />
                    <TopNavbarLink name="Following" href="/following" />
                </div>
            </div>
        </>
    )
}
