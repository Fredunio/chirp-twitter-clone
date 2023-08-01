export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bookmark: {
        Row: {
          chirp_id: string
          created_at: string
          user_id: string
        }
        Insert: {
          chirp_id: string
          created_at?: string
          user_id: string
        }
        Update: {
          chirp_id?: string
          created_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookmark_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      chirp: {
        Row: {
          content: string
          created_at: string
          id: string
          profile_id: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          profile_id: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          profile_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "chirp_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      chirp_comment: {
        Row: {
          chirp_id: string
          content: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          chirp_id: string
          content: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          chirp_id?: string
          content?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chirp_comment_chirp_id_fkey"
            columns: ["chirp_id"]
            referencedRelation: "chirp"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chirp_comment_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      chirp_hashtag: {
        Row: {
          chirp_id: string
          hashtag_id: string
        }
        Insert: {
          chirp_id: string
          hashtag_id: string
        }
        Update: {
          chirp_id?: string
          hashtag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chirp_hashtag_chirp_id_fkey"
            columns: ["chirp_id"]
            referencedRelation: "chirp"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chirp_hashtag_hashtag_id_fkey"
            columns: ["hashtag_id"]
            referencedRelation: "hashtag"
            referencedColumns: ["name"]
          }
        ]
      }
      chirp_like: {
        Row: {
          chirp_id: string
          created_at: string
          user_id: string
        }
        Insert: {
          chirp_id: string
          created_at?: string
          user_id: string
        }
        Update: {
          chirp_id?: string
          created_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chirp_like_chirp_id_fkey"
            columns: ["chirp_id"]
            referencedRelation: "chirp"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chirp_like_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      hashtag: {
        Row: {
          name: string
        }
        Insert: {
          name: string
        }
        Update: {
          name?: string
        }
        Relationships: []
      }
      profile: {
        Row: {
          avatar: string
          created_at: string
          email: string
          full_name: string
          id: string
          username: string
        }
        Insert: {
          avatar?: string
          created_at?: string
          email: string
          full_name: string
          id: string
          username: string
        }
        Update: {
          avatar?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_post: {
        Args: {
          _id: string
        }
        Returns: Json
      }
      get_post_comments: {
        Args: {
          _id: string
        }
        Returns: Json
      }
      get_posts_pagination: {
        Args: {
          _page_size?: number
          _page_number?: number
          _user_id?: string
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
