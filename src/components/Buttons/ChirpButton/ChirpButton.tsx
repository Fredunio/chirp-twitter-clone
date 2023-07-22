import React from 'react'

export default function ChirpButton({
    onClick,
    className,
}: {
    onClick?: () => void
    className?: string
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`px-6 py-1 text-xl font-bold text-gray-800 transition-colors duration-100 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active ${className}`}
        >
            Chirp
        </button>
    )
}
