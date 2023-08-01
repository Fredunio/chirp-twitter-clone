import React from 'react'
import { BiImageAlt } from 'react-icons/bi'

export default function AddImageButton() {
    return (
        <button
            type="button"
            title="Add an image"
            className=" transition-colors duration-75 rounded-full
             text-primary hover:bg-primary/20 p-[0.2rem]"
        >
            <BiImageAlt size={20} />
        </button>
    )
}
