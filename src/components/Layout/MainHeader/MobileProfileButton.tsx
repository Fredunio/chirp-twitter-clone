'use client'

import Image from 'next/image'

export default function MobileProfileButton({
    avatar,
    onClick,
}: {
    avatar: string | undefined
    onClick?: () => void
}) {
    if (avatar) {
        return (
            <button
                onClick={onClick}
                className="sm:hidden block absolute left-4"
                type="button"
                title="Profile"
            >
                <Image
                    src={avatar}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            </button>
        )
    }
}
