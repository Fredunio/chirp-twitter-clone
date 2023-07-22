import { AiOutlineHeart } from 'react-icons/ai'
import { LiaRetweetSolid } from 'react-icons/lia'

export default function LikeButton({
    onClick,
    size = 24,
    className,
}: {
    onClick?: () => void
    size?: number
    className?: string
}) {
    return (
        <button onClick={onClick} title="Like" className={`${className}`}>
            <AiOutlineHeart size={size} />
        </button>
    )
}
