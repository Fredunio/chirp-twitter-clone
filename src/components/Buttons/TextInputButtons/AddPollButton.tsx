import React from 'react'
import { FaPollH } from 'react-icons/fa'

export default function AddPollButton({ onClick }: { onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            type="button"
            title="Poll"
            className=" transition-colors duration-75 rounded-full
             text-primary hover:bg-primary/20 p-[0.2rem]"
        >
            <FaPollH size={18} />
        </button>
    )
}
