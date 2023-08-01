'use client'

import React, { useCallback, useEffect } from 'react'
import { BiDotsHorizontal } from 'react-icons/bi'
import CommentButton from '../Buttons/CommentButton/CommentButton'
import ReChirpButton from '../Buttons/ReChirpButton/ReChirpButton'
import LikeButton from '../Buttons/LikeButton/LikeButton'
import ViewsButton from '../Buttons/ViewsButton/ViewsButton'
import ShareButton from '../Buttons/ShareButton/ShareButton'
import { TPostPagination, TProfile } from '@/types/general-types'
import { useSupabase } from '@/app/supabase-provider'
import Image from 'next/image'
import { fetchIsPostLikedByUser, fetchPostLikeCount } from '@/lib/fetch'
import ReplyModal from '../Modals/ReplyModal/ReplyModal'
import Link from 'next/link'

export default function Post({
    post,
    userProfile,
}: {
    post: TPostPagination
    userProfile: TProfile | null
}) {
    const { supabase } = useSupabase()

    const [likeCount, setLikeCount] = React.useState<number | null>(null)
    const [isLikedByUser, setIsLikedByUser] = React.useState<boolean | null>(
        null
    )
    const [showReplyModal, setShowReplyModal] = React.useState<boolean>(false)

    useEffect(() => {
        fetchPostLikeCount(supabase, post.id).then((count) => {
            setLikeCount(count)
        })

        fetchIsPostLikedByUser(supabase, post.id).then((isLikedByUser) => {
            setIsLikedByUser(isLikedByUser)
        })
    }, [supabase, post.profile_id, post.id])

    const handleLike = useCallback(async () => {
        const user = await supabase.auth.getSession()

        if (!user.data.session?.user) {
            console.log('handleLike no session')
            return
        }

        if (isLikedByUser === null) {
            console.log('handleLike isLikedByUser is null: ', isLikedByUser)
            return
        }

        if (isLikedByUser === true) {
            console.log('handleLike isLikedByUser is true: ', isLikedByUser)

            console.log('chirp_id: ', post.id)
            console.log('user_id: ', user.data.session.user.id)

            const { error, count } = await supabase
                .from('chirp_like')
                .delete()
                .eq('chirp_id', post.id)
                .eq('user_id', user.data.session.user.id)

            console.log('count: ', count)
            if (error) {
                console.log('unlike error: ', error)
            }
            if (!error) {
                setIsLikedByUser(false)
            }
        } else if (isLikedByUser === false) {
            console.log('handleLike isLikedByUser is false: ', isLikedByUser)

            const { error } = await supabase.from('chirp_like').insert({
                chirp_id: post.id,
                user_id: user.data.session.user.id,
            })

            if (error) {
                console.log('like error: ', error)
            }
            if (!error) {
                setIsLikedByUser(true)
            }
        }

        fetchPostLikeCount(supabase, post.id).then((count) => {
            setLikeCount(count)
        })
    }, [supabase, isLikedByUser, post.id])

    return (
        <>
            <Link prefetch={false} href={`/post/${post.id}`} className="">
                <div className="flex gap-4 px-4 py-4 border-b-1 border-dimmed-color">
                    <div>
                        <Image
                            src={post.user.avatar}
                            alt="avatar"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-full">
                        <h3 className="flex items-center w-full">
                            <div className="flex items-center gap-1">
                                <span className="font-semibold">
                                    {post.user.username}
                                </span>
                                <span className="text-neutral-500 ">
                                    {post.user.email}
                                </span>
                                <span className="text-neutral-500 ">·</span>
                                <span className="text-neutral-500 ">1h</span>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                }}
                                title="More"
                                type="button"
                                className="p-1 ml-auto rounded-full hover:bg-neutral-800"
                            >
                                <BiDotsHorizontal size={24} />
                            </button>
                        </h3>
                        <p>{post.content}</p>
                        <div className="w-full rounded-lg mt-2 h-[30rem] bg-neutral-800">
                            image
                        </div>
                        <div className="flex items-center w-full gap-16 pt-4">
                            <CommentButton
                                size={16}
                                onClick={() => setShowReplyModal(true)}
                            />
                            <ReChirpButton size={18} />
                            <LikeButton
                                size={18}
                                onClick={handleLike}
                                likeCount={likeCount}
                                likedByUser={isLikedByUser}
                            />
                            <ViewsButton size={18} />
                            <ShareButton size={16} />
                        </div>
                    </div>
                </div>
            </Link>
            {showReplyModal && (
                <ReplyModal
                    showModal={showReplyModal}
                    setShowModal={setShowReplyModal}
                    userProfile={userProfile}
                    post={post}
                />
            )}
        </>
    )
}
