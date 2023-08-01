import { SupabaseClient } from '@supabase/supabase-js'
import { Database } from './database.types'

export async function fetchPostLikeCount(
    supabase: SupabaseClient,
    post_id: string
) {
    const { count, error } = await supabase
        .from('chirp_like')
        .select('*', { count: 'estimated', head: true })
        .eq('chirp_id', post_id)

    if (error) {
        console.log('post like count error: ', error)
        return null
    }
    if (count) {
        return count
    }
    return null
}

export async function fetchIsPostLikedByUser(
    supabase: SupabaseClient,
    post_id: string
) {
    const session = await supabase.auth.getSession()
    if (!session.data.session?.user) {
        console.log('fetchIsLikedByUser no session')
        return null
    }

    const user_id = session.data.session.user.id

    const { data: user, error } = await supabase
        .from('chirp_like')
        .select('user_id')
        .eq('user_id', user_id)
        .eq('chirp_id', post_id)

    if (error) {
        console.log('is liked by user error: ', error)
        return null
    }

    if (user && user.length > 0) {
        return true
    } else {
        return false
    }
}

export async function fetchPostComments(
    supabase: SupabaseClient<Database>,
    post_id: string
) {
    const { data: comments, error } = await supabase
        .from('chirp_comment')
        .select('*')
        .eq('chirp_id', post_id)
        .order('created_at', { ascending: true })

    if (error) {
        console.log('post comments error: ', error)
        return null
    }

    if (comments) {
        return comments
    }
}
