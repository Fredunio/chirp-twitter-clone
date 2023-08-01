'use client'

import FocusTrap from 'focus-trap-react'
import { useEffect } from 'react'

export default function ModalOverlay({
    onOverlayClick,
    children,
}: {
    onOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void
    children: React.ReactNode
}) {
    useEffect(() => {
        // Disable scrolling when the modal is open
        document.body.style.overflow = 'hidden'

        // Cleanup function to re-enable scrolling
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <FocusTrap>
            <div className="fixed flex items-center justify-center inset-0 z-50 ">
                <div
                    onClick={(e) => {
                        onOverlayClick(e)
                    }}
                    className="overlay fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg"
                ></div>
                {children}
            </div>
        </FocusTrap>
    )
}
