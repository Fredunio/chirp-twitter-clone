import React from 'react'
import { BiWorld } from 'react-icons/bi'
import ChirpButton from '../../Buttons/ChirpButton/ChirpButton'

export default function WelcomeChirp() {
    return (
        <div className="flex px-4 py-2 border-b-1 border-dimmed-color">
            <div>
                <div className="w-10 h-10 rounded-full bg-secondary"></div>
            </div>
            <div className="flex flex-col w-full px-4 ">
                <div className="flex flex-col border-b-1 border-dimmed-color">
                    <input
                        className="px-2 py-2 text-2xl placeholder-neutral-500 bg-transparent"
                        placeholder="What's chirping?"
                        type="text"
                    />
                    <button className="flex items-center self-start gap-2 my-4 text-primary">
                        <BiWorld size={18} />
                        Everybirdy can reply
                    </button>
                </div>
                <div className="flex items-center justify-between pt-2">
                    <div>icons</div>
                    <ChirpButton />
                </div>
            </div>
        </div>
    )
}
