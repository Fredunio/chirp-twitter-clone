import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function PostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="border-x-1 border-dimmed-color">
            <header className="sticky z-[2]  top-0 w-full  backdrop-blur-md">
                <div className="px-4 py-4 text-xl relative z-[1] w-full flex items-center  font-bold">
                    <Link
                        href="/"
                        prefetch={false}
                        className="flex items-center gap-6"
                        type="button"
                        title="Back to home"
                    >
                        <AiOutlineArrowLeft />
                        Chirp
                    </Link>
                </div>
            </header>
            <main>{children}</main>
        </div>
    )
}
