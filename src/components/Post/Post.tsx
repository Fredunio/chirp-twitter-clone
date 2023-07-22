import React from 'react'
import { BiDotsHorizontal } from 'react-icons/bi'

export default function Post() {
    return (
        <article className="flex">
            <div>
                <div className="w-10 h-10 rounded-full bg-secondary"></div>
            </div>
            <div>
                <h3 className="flex items-center w-full">
                    <div>
                        <span>ChiwiTeam</span>
                        <span>@chiwi_team</span>
                        <span>·</span>
                        <span>1h</span>
                    </div>
                    <button className="ml-auto rounded-full">
                        <BiDotsHorizontal size={24} />
                    </button>
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam
                </p>
                <div className="w-full h-[30rem] bg-gray-800"></div>
            </div>
        </article>
    )
}
