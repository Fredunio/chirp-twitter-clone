import React from 'react'
import { BiSmile } from 'react-icons/bi'
import { BsCalendarPlus } from 'react-icons/bs'
import { FaPollH } from 'react-icons/fa'

export default function AddScheduleButton({
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
            <BsCalendarPlus size={18} />
        </button>
    )
}
