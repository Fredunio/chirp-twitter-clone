import { IoMdStats } from 'react-icons/io'

export default function ViewsButton({
    onClick,
    size = 24,
    className,
}: {
    onClick?: () => void
    size?: number
    className?: string
}) {
    return (
        <button onClick={onClick} title="Views" className={`${className}`}>
            <IoMdStats size={size} />
        </button>
    )
}
