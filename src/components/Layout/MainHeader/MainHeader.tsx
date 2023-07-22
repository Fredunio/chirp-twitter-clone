import Link from 'next/link'
import React from 'react'
import { BiWorld } from 'react-icons/bi'
import ChirpButton from '../../Buttons/ChirpButton/ChirpButton'

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

export default function MainHeader() {
    return (
        <div className="sticky top-0 w-full pt-4 backdrop-blur-md">
            <h1 className="px-4 text-xl font-bold">Home</h1>
            <div className="flex items-center w-full mt-4 border-b-1 border-dimmed-color decoration-4 underline-offset-8 justify-evenly">
                <TopNavbarLink name="For You" href="/top" />
                <TopNavbarLink name="Following" href="/following" />
            </div>
        </div>
    )
}
