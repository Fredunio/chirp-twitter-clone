import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { LiaRetweetSolid } from 'react-icons/lia'

export default function LikeButton({
    onClick,
    likeCount,
    likedByUser,
    size = 24,
    className,
}: {
    onClick?: () => void
    likeCount?: number | null
    likedByUser?: boolean | null
    size?: number
    className?: string
}) {
    return (
        <button
            onClick={onClick}
            title="Like"
            className={`flex relative z-[1] items-center gap-2 ${className} ${
                likedByUser && 'text-rose-500'
            }`}
        >
            {likedByUser ? (
                <AiFillHeart size={size} />
            ) : (
                <AiOutlineHeart size={size} />
            )}
            {/* {likeCount && <span className="">{likeCount}</span>} */}
            <span className="absolute left-6 font-bold">{likeCount}</span>
        </button>
    )
}
