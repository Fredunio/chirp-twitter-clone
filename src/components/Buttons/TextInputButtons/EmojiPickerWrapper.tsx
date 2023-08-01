import dynamic from 'next/dynamic'
import React from 'react'

const Picker = dynamic(
    () => {
        return import('emoji-picker-react')
    },
    { ssr: false }
)

type TProps = {
    onEmojiClick: (event: any, emojiObject: any) => void
    isVisible: boolean
    positon: 'top' | 'bottom'
}

const EmojiPickerWrapper = React.forwardRef<HTMLDivElement, TProps>(
    ({ onEmojiClick, isVisible, positon = 'bottom' }: TProps, ref) => {
        if (!isVisible) return null

        console.log('EmojiPickerWrapper rendered')

        return (
            <div
                ref={ref}
                className={`${isVisible ? 'block' : 'hidden'} ${
                    positon === 'top' ? 'top-10' : 'bottom-10'
                } absolute`}
            >
                <Picker onEmojiClick={onEmojiClick} />
            </div>
        )
    }
)

EmojiPickerWrapper.displayName = 'EmojiPickerWrapper'

export default EmojiPickerWrapper
