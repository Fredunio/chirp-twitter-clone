import { BsShareFill } from 'react-icons/bs'

export default function ShareButton({
    onClick,
    size = 24,
    className,
}: {
    onClick?: () => void
    size?: number
    className?: string
}) {
    return (
        <button onClick={onClick} title="Share" className={`${className}`}>
            <BsShareFill size={size} />
        </button>
    )
}
