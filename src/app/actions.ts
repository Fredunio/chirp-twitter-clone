'use server'

import { cookies } from 'next/headers'
import { TChirpForm } from '@/types/form-types'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { Database } from '@/lib/database.types'

export async function submitChirpAction(formData: TChirpForm) {
    try {
        const supabase = createServerActionClient<Database>({
            cookies,
        })
        const { data: userData } = await supabase.auth.getUser()
        if (!userData || !userData.user) {
            console.log('User not logged in')
            // return
            throw new Error('User not logged in')
        }
        const { data, error } = await supabase.from('chirp').insert({
            profile_id: userData.user.id,
            content: formData.chirp,
        })

        revalidatePath('/')
    } catch (error) {
        return 'Something went wrong'
    }
}
