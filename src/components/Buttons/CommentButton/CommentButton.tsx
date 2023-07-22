import { GoComment } from 'react-icons/go'

export default function CommentButton({
    onClick,
    size = 24,
    className,
}: {
    onClick?: () => void
    size?: number
    className?: string
}) {
    return (
        <button onClick={onClick} title="Comment" className={`${className}`}>
            <GoComment size={size} />
        </button>
    )
}
