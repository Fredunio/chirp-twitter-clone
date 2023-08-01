import { Database } from '@/lib/database.types'

export type TTable = Database['public']['Tables']

export type TPost = TTable['chirp']['Row']
export type TProfile = TTable['profile']['Row']

export type TPostPagination = TPost & { user: TProfile }

export type TComment = TTable['chirp_comment']['Row']
