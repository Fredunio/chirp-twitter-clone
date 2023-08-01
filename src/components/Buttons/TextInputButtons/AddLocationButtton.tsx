import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

export default function AddLocationButton({
    onClick,
}: {
    onClick?: () => void
}) {
    return (
        <button
            onClick={onClick}
            type="button"
            title="Poll"
            className=" transition-colors duration-75 rounded-full
             text-primary hover:bg-primary/20 p-[0.2rem]"
        >
            <IoLocationSharp size={18} />
        </button>
    )
}
