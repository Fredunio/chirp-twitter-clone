import React from 'react'
import { BiDotsHorizontal } from 'react-icons/bi'
import CommentButton from '../Buttons/CommentButton/CommentButton'
import ReChirpButton from '../Buttons/ReChirpButton/ReChirpButton'
import LikeButton from '../Buttons/LikeButton/LikeButton'
import ViewsButton from '../Buttons/ViewsButton/ViewsButton'
import ShareButton from '../Buttons/ShareButton/ShareButton'

export default function Post() {
    return (
        <article className="flex gap-4 px-4 py-4 border-b-1 border-dimmed-color">
            <div>
                <div className="w-10 h-10 rounded-full bg-secondary"></div>
            </div>
            <div className="w-full">
                <h3 className="flex items-center w-full">
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">ChiwiTeam</span>
                        <span className="text-neutral-500 ">@chiwi_team</span>
                        <span className="text-neutral-500 ">·</span>
                        <span className="text-neutral-500 ">1h</span>
                    </div>
                    <button
                        title="More"
                        type="button"
                        className="p-1 ml-auto rounded-full hover:bg-neutral-800"
                    >
                        <BiDotsHorizontal size={24} />
                    </button>
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequuntur alias facere incidunt, labore quos
                    nesciunt laudantium atque sit nulla perspiciatis sequi
                    dolore quo! Et, aperiam. Quos repellendus deserunt est!
                    Rerum nobis aliquam vitae rem, corrupti ipsum itaque ea
                    illum laboriosam quos eveniet amet, blanditiis eius
                    inventore molestiae animi harum iusto a quibusdam culpa
                    repellat, explicabo facere dicta. Ducimus, mollitia? Iusto
                    doloremque reiciendis maxime distinctio. Accusantium fuga
                    magnam exercitationem quae cum explicabo asperiores, nostrum
                    fugiat quod sequi dolore odio ipsam temporibus obcaecati
                    repudiandae vitae doloremque sint? Qui non eum facilis? Esse
                    nemo distinctio accusantium hic fuga commodi vero aliquid
                    fugiat quisquam nisi natus quam dignissimos, veritatis,
                    corrupti, id error tempora sequi. Esse repellendus corrupti
                    modi officia unde quidem expedita similique. Nesciunt,
                    eveniet tenetur possimus blanditiis iste porro odio debitis
                    aut fuga similique molestias dignissimos numquam magnam
                    reprehenderit! Nostrum illo reiciendis cum perferendis,
                    molestiae quo excepturi rem tempora deserunt voluptate
                    explicabo.
                </p>
                <div className="w-full rounded-lg mt-2 h-[30rem] bg-neutral-800">
                    image
                </div>
                <div className="flex items-center w-full gap-16 pt-4">
                    <CommentButton size={16} />
                    <ReChirpButton size={18} />
                    <LikeButton size={18} />
                    <ViewsButton size={18} />
                    <ShareButton size={16} />
                </div>
            </div>
        </article>
    )
}
