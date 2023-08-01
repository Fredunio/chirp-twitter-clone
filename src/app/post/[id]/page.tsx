import { Database } from '@/lib/database.types'
import { TPostPagination } from '@/types/general-types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import moment from 'moment'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { BiDotsHorizontal } from 'react-icons/bi'

export default async function PostPage({ params }: { params: { id: string } }) {
    const supabase = createServerComponentClient<Database>({ cookies })

    const { data: postArr, error } = await supabase.rpc('get_post', {
        _id: params.id,
    })
    const post = postArr[0] as TPostPagination
    const comments = await supabase.rpc('get_post_comments', {
        _id: params.id,
    })
    const humanDate = moment(post.created_at).format('h:mm A · MMM D, YYYY')
    console.log('post page: ', post)
    console.log('comments: ', comments)

    return (
        <div className="flex flex-col px-4">
            {/* Header */}
            <div className="flex items-center mt-2">
                <div className="flex items-center gap-2">
                    <Image
                        src={post.user.avatar}
                        alt={post.user.username}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold">{post.user.username}</span>
                        <span className="text-gray-500">{post.user.email}</span>
                    </div>
                </div>
                <button
                    title="More"
                    type="button"
                    className="p-1 ml-auto rounded-full hover:bg-neutral-800"
                >
                    <BiDotsHorizontal size={24} />
                </button>
            </div>

            {/* Post content */}
            <div className="mt-2">
                <p>{post.content}</p>
                <div className="w-full rounded-lg mt-2 h-[30rem] bg-neutral-800">
                    image
                </div>
                <div
                    className="
                 text-gray-500"
                >
                    {humanDate}
                </div>
            </div>
        </div>
    )
}
