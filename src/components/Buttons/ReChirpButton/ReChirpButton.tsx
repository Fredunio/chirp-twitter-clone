import { LiaRetweetSolid } from 'react-icons/lia'

export default function ReChirpButton({
    onClick,
    size = 24,
    className,
}: {
    onClick?: () => void
    size?: number
    className?: string
}) {
    return (
        <button onClick={onClick} title="Rechirp" className={`${className}`}>
            <LiaRetweetSolid size={size} />
        </button>
    )
}
