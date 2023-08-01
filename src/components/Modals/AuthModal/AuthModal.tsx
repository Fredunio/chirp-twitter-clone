'use client'

import { useSupabase } from '@/app/supabase-provider'
import React, { useCallback } from 'react'
import { GiBirdTwitter } from 'react-icons/gi'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import AuthLoginForm from './AuthLoginForm'
import AuthSignUpForm from './AuthSignUpForm'
import FocusTrap from 'focus-trap-react'

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
})

type TLoginInputs = {
    email: string
    password: string
}

export default function AuthModal() {
    const { supabase } = useSupabase()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TLoginInputs>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<TLoginInputs> = (data) => {
        supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        })
        console.log(data)
    }

    const [tab, setTab] = React.useState<'login' | 'signup'>('login')

    return (
        <FocusTrap>
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        role="dialog"
                        id="auth-modal"
                        title="Login to Chirp"
                        className="flex flex-col items-center p-10 bg-black rounded-lg border-1 border-dimmed-color"
                    >
                        <h1 className="flex items-center gap-4 text-3xl font-bold font-pacifico">
                            Chirp
                            <GiBirdTwitter
                                size={36}
                                className="inline-block text-primary group-hover:text-primary-hover group-active:text-primary-active"
                            />
                        </h1>
                        {tab === 'login' ? (
                            <AuthLoginForm onSetTab={() => setTab('signup')} />
                        ) : (
                            <AuthSignUpForm onSetTab={() => setTab('login')} />
                        )}
                    </div>
                </div>
            </div>
        </FocusTrap>
    )
}
