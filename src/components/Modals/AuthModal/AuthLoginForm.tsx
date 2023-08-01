import GoogleButton from './GoogleButton'

import { useSupabase } from '@/app/supabase-provider'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
})

type TLoginInputs = {
    email: string
    password: string
}

export default function AuthLoginForm({ onSetTab }: { onSetTab: () => void }) {
    const { supabase } = useSupabase()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<TLoginInputs>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<TLoginInputs> = (data) => {
        const test = supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        })
        console.log(data)
        test.then((res) => console.log(res))
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
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <p className="mt-4">or</p>
            <GoogleButton className="mt-6" supabase={supabase} />
            <p className="mt-4 font-light ">
                Don&apos;t have an account?{' '}
                <button
                    disabled={isSubmitting}
                    onClick={onSetTab}
                    className="inline text-primary hover:underline"
                >
                    Sign Up
                </button>
            </p>
        </div>
    )
}
