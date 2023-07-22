'use client'

import Link from 'next/link'

export default function FollowLink({ name }: { name: string }) {
    return (
        <Link
            prefetch={false}
            href="/"
            className="relative w-full px-4 py-4 transition-colors duration-75 hover:bg-neutral-800"
        >
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-secondary"></div>
                    <div className="flex flex-col">
                        <h4 className="font-semibold">{name}</h4>
                        <p className="text-[0.8rem] leading-3 text-neutral-500">
                            {' '}
                            @chiwi_team
                        </p>
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        type="button"
                        title="Follow"
                        className="px-5 py-2 ml-auto text-sm font-semibold rounded-full text-neutral-900 bg-primary hover:bg-primary-hover active:bg-primary-active"
                    >
                        Follow
                    </button>
                </div>
            </div>
        </Link>
    )
}
