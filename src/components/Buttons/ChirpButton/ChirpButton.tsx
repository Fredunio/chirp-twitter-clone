import React from 'react'

export default function ChirpButton({
    onClick,
    className,
    isSubmitting,
    isDisabled,
}: {
    onClick?: () => void
    className?: string
    isSubmitting?: boolean
    isDisabled?: boolean
}) {
    const normal = 'bg-primary hover:bg-primary-hover active:bg-primary-active'
    const disabled = 'bg-primary bg-opacity-50 cursor-not-allowed'

    return (
        <button
            disabled={isDisabled}
            type="submit"
            onClick={onClick}
            className={`${
                isDisabled ? disabled : normal
            } px-6 py-1 text-xl font-bold text-neutral-800 transition-colors duration-100 rounded-full  ${className}`}
        >
            Chirp {isSubmitting && 'ing...'}
        </button>
    )
}
