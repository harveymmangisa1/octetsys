import { Database } from './database';

// Table row types
export type Post = Database['public']['Tables']['posts']['Row'];
export type PostInsert = Database['public']['Tables']['posts']['Insert'];
export type PostUpdate = Database['public']['Tables']['posts']['Update'];

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

export type CyberViolenceReport = Database['public']['Tables']['cyber_violence_reports']['Row'];
export type CyberViolenceReportInsert = Database['public']['Tables']['cyber_violence_reports']['Insert'];
export type CyberViolenceReportUpdate = Database['public']['Tables']['cyber_violence_reports']['Update'];

// View types
export type PublicReport = Database['public']['Views']['public_reports']['Row'];

// Enum types
export type PostType = 'news' | 'blog' | 'event';
export type PostStatus = 'draft' | 'published';

// Helper types for forms
export type PostFormData = Omit<PostInsert, 'id' | 'author_id' | 'created_at' | 'updated_at' | 'search_vector' | 'slug'>;
export type ProfileFormData = Omit<ProfileInsert, 'id' | 'created_at' | 'updated_at'>;

// API Response types
export type ApiResponse<T> =
    | { success: true; data: T }
    | { success: false; error: string };

export type PaginatedResponse<T> = {
    data: T[];
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
};
