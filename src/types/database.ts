// Database type definitions
// These should ideally be generated from Supabase CLI
// Run: npx supabase gen types typescript --project-id <your-project-id> > src/types/database.generated.ts

export interface Database {
    public: {
        Tables: {
            posts: {
                Row: {
                    id: string;
                    title: string;
                    slug: string | null;
                    content: string;
                    excerpt: string | null;
                    type: 'news' | 'blog' | 'event';
                    status: 'draft' | 'published';
                    image: string | null;
                    author_id: string;
                    tags: string[] | null;
                    seo_title: string | null;
                    seo_description: string | null;
                    search_vector: unknown | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    title: string;
                    slug?: string | null;
                    content: string;
                    excerpt?: string | null;
                    type: 'news' | 'blog' | 'event';
                    status?: 'draft' | 'published';
                    image?: string | null;
                    author_id: string;
                    tags?: string[] | null;
                    seo_title?: string | null;
                    seo_description?: string | null;
                    search_vector?: unknown | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    title?: string;
                    slug?: string | null;
                    content?: string;
                    excerpt?: string | null;
                    type?: 'news' | 'blog' | 'event';
                    status?: 'draft' | 'published';
                    image?: string | null;
                    author_id?: string;
                    tags?: string[] | null;
                    seo_title?: string | null;
                    seo_description?: string | null;
                    search_vector?: unknown | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            profiles: {
                Row: {
                    id: string;
                    full_name: string | null;
                    avatar_url: string | null;
                    role: string | null;
                    bio: string | null;
                    social_twitter: string | null;
                    social_linkedin: string | null;
                    email: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id: string;
                    full_name?: string | null;
                    avatar_url?: string | null;
                    role?: string | null;
                    bio?: string | null;
                    social_twitter?: string | null;
                    social_linkedin?: string | null;
                    email?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    full_name?: string | null;
                    avatar_url?: string | null;
                    role?: string | null;
                    bio?: string | null;
                    social_twitter?: string | null;
                    social_linkedin?: string | null;
                    email?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            cyber_violence_reports: {
                Row: {
                    id: string;
                    violence_type: string;
                    description: string;
                    platform: string | null;
                    severity: string | null;
                    additional_details: string | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    violence_type: string;
                    description: string;
                    platform?: string | null;
                    severity?: string | null;
                    additional_details?: string | null;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    violence_type?: string;
                    description?: string;
                    platform?: string | null;
                    severity?: string | null;
                    additional_details?: string | null;
                    created_at?: string;
                };
            };
        };
        Views: {
            public_reports: {
                Row: {
                    id: string;
                    violence_type: string;
                    description: string;
                    created_at: string;
                };
            };
        };
        Functions: {
            create_anonymous_report: {
                Args: {
                    violence_type_in: string;
                    description_in: string;
                    platform_in: string;
                    severity_in: string;
                    additional_details_in: string;
                };
                Returns: string;
            };
        };
    };
}
