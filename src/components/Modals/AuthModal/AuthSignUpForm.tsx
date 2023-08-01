'use client'

import GoogleButton from './GoogleButton'

import { useSupabase } from '@/app/supabase-provider'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
})

type TSignUpInputs = {
    email: string
    password: string
}

export default function AuthSignUpForm({ onSetTab }: { onSetTab: () => void }) {
    const supabase = createClientComponentClient<Database>()
    // const { supabase } = useSupabase()
    const {
        register,
        handleSubmit,
        watch,

        formState: { errors, isSubmitting },
    } = useForm<TSignUpInputs>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<TSignUpInputs> = (data) => {
        supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                emailRedirectTo: `http://localhost:3000/auth/callback`,
            },
        })
        console.log(data)
    }

    return (
        <div className="flex flex-col items-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full gap-4 mt-8"
            >
                <input
                    {...register('email')}
                    type="text"
                    placeholder="Email"
                    className="text-lg input"
                />
                <input
                    {...register('password')}
                    type="password"
                    placeholder="Password"
                    className="text-lg input"
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-bold transition-colors duration-100 rounded-full text-neutral-800 bg-primary hover:bg-primary-hover active:bg-primary-active"
                >
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>
            <p className="mt-4">or</p>
            <GoogleButton className="mt-6" supabase={supabase} />
            <p className="mt-4 font-light ">
                Already have an account?{' '}
                <button
                    disabled={isSubmitting}
                    onClick={onSetTab}
                    className="inline text-primary hover:underline"
                >
                    Go to Login
                </button>
            </p>
        </div>
    )
}
