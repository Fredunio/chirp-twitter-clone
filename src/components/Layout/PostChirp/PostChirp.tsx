'use client'

import toast from 'react-hot-toast'
import { useEffect, useState, useTransition } from 'react'
import { BiWorld } from 'react-icons/bi'
import ChirpButton from '../../Buttons/ChirpButton/ChirpButton'
import AddImageButton from '../../Buttons/TextInputButtons/AddImageButton'
import AddGifButton from '../../Buttons/TextInputButtons/AddGifButton'
import AddPollButton from '../../Buttons/TextInputButtons/AddPollButton'
import AddEmojiButton from '../../Buttons/TextInputButtons/AddEmojiButton'
import AddScheduleButton from '../../Buttons/TextInputButtons/AddScheduleButton'
import AddLocationButton from '../../Buttons/TextInputButtons/AddLocationButtton'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import EmojiPickerWrapper from '../../Buttons/TextInputButtons/EmojiPickerWrapper'
import { TChirpForm } from '@/types/form-types'
import { submitChirpAction } from '@/app/actions'
import { User } from '@supabase/supabase-js'
import Image from 'next/image'
import { TProfile } from '@/types/general-types'
import { useSupabase } from '@/app/supabase-provider'
import CommentsModal from '@/components/Modals/ReplyModal/ReplyModal'

const schema = yup.object().shape({
    chirp: yup
        .string()
        .required('Chirp is required')
        .min(1, 'Chirp is required'),
})

export default function PostChirp({
    userProfile,
}: {
    userProfile: TProfile | null
}) {
    const {
        register,
        reset,
        setValue,
        getValues,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TChirpForm>({
        defaultValues: {
            chirp: '',
        },
        // resolver: yupResolver(schema),
    })

    const { supabase } = useSupabase()

    function onSubmit(data: TChirpForm, e: any) {
        e.preventDefault()
        console.log('submitting')

        console.log(data)
        reset()

        startTransition(() => {
            submitChirpAction(data).then((res) => {
                if (res) {
                    toast.error(res)
                } else {
                    toast.success('Chirp submitted successfully!')
                }
            })
        })
        // startTransition(() => {
        //     //     .then((res) => {
        //     //         if (res) {
        //     //             toast.error(res)
        //     //         } else {
        //     //             toast.success('Chirp submitted successfully!')
        //     //         }
        //     //     })
        // })
    }

    let [isPending, startTransition] = useTransition()
    const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false)

    return (
        <div className="flex px-4 py-2 border-b-1 border-dimmed-color">
            <div>
                {userProfile ? (
                    <Image
                        src={userProfile.avatar}
                        alt="avatar"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-secondary"></div>
                )}
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full px-4"
            >
                <div className="flex flex-col border-b-1 border-dimmed-color">
                    <input
                        autoComplete={'off'}
                        {...register('chirp')}
                        className="px-2 py-2 text-2xl placeholder-neutral-500 bg-transparent"
                        placeholder="What's chirping?"
                        type="text"
                    />
                    <button className="flex items-center self-start gap-2 my-4 text-primary">
                        <BiWorld size={18} />
                        Everybirdy can reply
                    </button>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center relative z-[1] gap-2">
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
                            positon="top"
                            isVisible={isEmojiPickerVisible}
                            onEmojiClick={(emojiObject, e) => {
                                setIsEmojiPickerVisible((prev) => !prev)
                                setValue(
                                    'chirp',
                                    getValues('chirp') + emojiObject.emoji
                                )
                            }}
                        />
                    </div>
                    <ChirpButton isSubmitting={isSubmitting} />
                </div>
            </form>
        </div>
    )
}
