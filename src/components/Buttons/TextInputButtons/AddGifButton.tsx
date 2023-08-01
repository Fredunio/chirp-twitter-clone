import React from 'react'
import { MdGifBox } from 'react-icons/md'

export default function AddGifButton({ onClick }: { onClick?: () => void }) {
    return (
        <button
            type="button"
            title="Add an image"
            className=" transition-colors duration-75 text-primary hover:bg-primary/20 rounded-full p-[0.2rem]"
        >
            <MdGifBox size={20} />
        </button>
    )
}
