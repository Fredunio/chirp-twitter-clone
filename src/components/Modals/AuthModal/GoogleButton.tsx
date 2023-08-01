import { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import React, { useCallback } from 'react'

export default function GoogleButton({
    supabase,
    className,
}: {
    supabase: SupabaseClient
    className?: string
}) {
    const handleGoogleLogin = useCallback(() => {
        supabase.auth.signInWithOAuth({
            provider: 'google',
        })
    }, [supabase])

    return (
        <button
            onClick={handleGoogleLogin}
            type="button"
            className={`w-full px-4 py-2 text-lg font-bold transition-colors duration-100 rounded-full text-neutral-800 bg-primary hover:bg-primary-hover active:bg-primary-active ${className}`}
        >
            Continue with Google
        </button>
    )
}
