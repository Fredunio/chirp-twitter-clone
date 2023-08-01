'use client'

import { useSupabase } from '@/app/supabase-provider'
import ModalOverlay from '../ModalOverlay'
import {
    TComment,
    TPost,
    TPostPagination,
    TProfile,
} from '@/types/general-types'
import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchPostComments } from '@/lib/fetch'
import { IoMdClose } from 'react-icons/io'
import Image from 'next/image'
import AddImageButton from '@/components/Buttons/TextInputButtons/AddImageButton'
import AddGifButton from '@/components/Buttons/TextInputButtons/AddGifButton'
import AddPollButton from '@/components/Buttons/TextInputButtons/AddPollButton'
import AddEmojiButton from '@/components/Buttons/TextInputButtons/AddEmojiButton'
import AddScheduleButton from '@/components/Buttons/TextInputButtons/AddScheduleButton'
import AddLocationButton from '@/components/Buttons/TextInputButtons/AddLocationButtton'
import EmojiPickerWrapper from '@/components/Buttons/TextInputButtons/EmojiPickerWrapper'
import { useForm } from 'react-hook-form'
import ChirpButton from '@/components/Buttons/ChirpButton/ChirpButton'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type TReplyForm = {
    reply: string
}

const schema = yup.object().shape({
    reply: yup
        .string()
        .required('reply is required')
        .min(1, 'reply is required'),
})

export default function ReplyModal({
    post,
    userProfile,
    showModal,
    setShowModal,
}: {
    post: TPostPagination
    userProfile: TProfile | null
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const { supabase } = useSupabase()

    const {
        register,
        reset,
        setValue,
        getValues,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm<TReplyForm>({
        defaultValues: {
            reply: '',
        },
        resolver: yupResolver(schema),
    })

    function onSubmit(data: TReplyForm, e: any) {
        e.preventDefault()
        if (!userProfile) {
            return
        }

        supabase
            .from('chirp_comment')
            .insert({
                chirp_id: post.id,
                user_id: userProfile.id,
                content: data.reply,
            })
            .then(
                (res) => {
                    console.log('res: ', res)
                },
                (err) => {
                    console.log('err: ', err)
                }
            )
        reset()
        setShowModal(false)
    }
    const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false)

    const emojiPickerRef = useRef<HTMLDivElement>(null)
    const modalRef = useRef<HTMLFormElement>(null)

    const handleClickOutside = useCallback(
        (event: any) => {
            console.log(
                'clicked outside, ref: ',
                emojiPickerRef.current,
                'event: ',
                event.target
            )
            if (
                emojiPickerRef.current &&
                isEmojiPickerVisible &&
                !emojiPickerRef.current.contains(event.target)
            ) {
                setIsEmojiPickerVisible(false)
            }
        },
        [isEmojiPickerVisible]
    )

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [emojiPickerRef, handleClickOutside])

    return (
        <ModalOverlay
            onOverlayClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation()
                setShowModal(false)
            }}
        >
            <form
                ref={modalRef}
                onSubmit={handleSubmit(onSubmit)}
                className="p-2 w-[35rem] rounded-xl bg-neutral-950 border-1 border-dimmed-color z-[100]"
            >
                <div className="flex items-center w-full">
                    <button
                        title="Close"
                        type="button"
                        className="rounded-full p-2 hover:bg-neutral-900"
                    >
                        <IoMdClose
                            size={24}
                            onClick={() => setShowModal(false)}
                        />
                    </button>
                </div>
                <div className="flex w-full mt-6 gap-2 px-2">
                    <div>
                        <Image
                            src={post.user.avatar}
                            alt="avatar"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                    <div className="h-full w-2 bg-red-500"></div>
                    <div>
                        <h3 className="flex items-center gap-2">
                            <span className="font-semibold">
                                {post.user.username}
                            </span>{' '}
                            <span className="text-neutral-400 font-light">
                                @{post.user.email}
                            </span>{' '}
                            <span className="text-neutral-400 font-light">
                                ·
                            </span>{' '}
                            {/* TODO: change */}
                            <span className="text-neutral-400 font-light">
                                1m
                            </span>
                        </h3>
                        <p className="text-neutral-100">{post.content}</p>
                        <button className="mt-2 ">
                            <span className="text-neutral-400 font-light">
                                Replying to{' '}
                            </span>
                            <span className="text-blue-500">
                                @{post.user.username}
                            </span>
                        </button>
                    </div>
                </div>

                <div className="flex gap-2 mt-4 w-full px-2">
                    <div>
                        {userProfile && (
                            <Image
                                src={userProfile.avatar}
                                alt="avatar"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        )}
                    </div>
                    <div className="w-full">
                        <textarea
                            {...register('reply')}
                            className="w-full resize-none p-2 text-lg bg-transparent rounded-md min-h-[6rem] outline-none"
                            placeholder="What's chirping?"
                        ></textarea>
                    </div>
                </div>
                <div className="flex px-2 items-center relative z-[1] mt-4 gap-2">
                    <AddImageButton />
                    <AddGifButton />
                    <AddPollButton />
                    <AddEmojiButton
                        onClick={() => {
                            setIsEmojiPickerVisible((prev) => !prev)
                        }}
                    />
                    <AddScheduleButton />
                    <AddLocationButton />
                    <EmojiPickerWrapper
                        positon="bottom"
                        isVisible={isEmojiPickerVisible}
                        ref={emojiPickerRef}
                        onEmojiClick={(emojiObject, e) => {
                            setIsEmojiPickerVisible((prev) => !prev)
                            setValue(
                                'reply',
                                getValues('reply') + emojiObject.emoji
                            )
                            console.log('clicked emoji')
                        }}
                    />
                    <ChirpButton
                        isDisabled={!isValid}
                        className="ml-auto"
                        isSubmitting={isSubmitting}
                    />
                </div>
            </form>
        </ModalOverlay>
    )
}
