import React from 'react'
import { BiSmile } from 'react-icons/bi'
import EmojiPicker from 'emoji-picker-react'

export default function AddEmojiButton({ onClick }: { onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            type="button"
            title="Poll"
            className=" transition-colors duration-75 rounded-full
             text-primary hover:bg-primary/20 p-[0.2rem]"
        >
            <BiSmile size={20} />
        </button>
    )
}
