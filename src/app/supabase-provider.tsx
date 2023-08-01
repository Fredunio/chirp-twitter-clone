'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

import type { SupabaseClient, User } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'

type SupabaseContext = {
    supabase: SupabaseClient<Database>
}

export const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [supabase] = useState(() => createClientComponentClient())
    const router = useRouter()

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(() => {
            router.refresh()
        })

        supabase.auth.getSession().then((res) => {
            if (!res.data.session) {
                return
            }
            setUser(res.data.session.user)
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [router, supabase])

    return (
        <Context.Provider value={{ supabase }}>
            <>{children}</>
        </Context.Provider>
    )
}

export const useSupabase = () => {
    const context = useContext(Context)

    if (context === undefined) {
        throw new Error('useSupabase must be used inside SupabaseProvider')
    }

    return context
}
