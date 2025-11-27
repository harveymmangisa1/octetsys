# OctetSys - Next.js Corporate Website

A modern corporate website built with Next.js 15, Supabase, and TypeScript, featuring blog management, team profiles, and cyber security services.

## 🚀 Features

- **Blog & News Management**: Full-featured CMS with rich text editing
- **Team Profiles**: Manage team members with profiles, bios, and social links
- **Cyber Security Services**: Showcase security offerings and services
- **Cyber Violence Reporting**: Anonymous reporting system for cyber violence incidents
- **SEO Optimized**: Dynamic metadata, sitemap, and robots.txt
- **Authentication**: Secure admin panel with Supabase Auth
- **Edge Runtime**: Optimized for Cloudflare Workers deployment

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account and project
- (Optional) Cloudflare account for deployment

## 🛠️ Setup

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd octetsys
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for admin operations)

Optional:
- `NEXT_PUBLIC_SITE_URL`: Your production site URL (for SEO)
- `ENFORCE_STRICT_BUILD`: Set to `true` for strict TypeScript/ESLint checks

### 3. Database Setup

Run the Supabase migrations to set up your database:

```bash
# If using Supabase CLI locally
npx supabase db push

# Or apply migrations manually in your Supabase dashboard
# Navigate to SQL Editor and run each migration file in order from supabase/migrations/
```

Migrations include:
- `0001_create_cyber_violence_reports_table.sql` - Cyber violence reporting
- `0002_create_rpc_for_reports.sql` - RPC functions for anonymous reports
- `0003_create_public_reports_view.sql` - Public view for reports
- `0004_create_posts_table.sql` - Blog/news posts table
- `20251127150821_add_storage_and_seed_posts.sql` - Storage and sample data
- `20251127232230_add_team_and_blog_features.sql` - Team profiles and blog enhancements
- `20251127234500_add_storage_indexes_search.sql` - Performance indexes and full-text search

### 4. Create Admin User

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Users
3. Click "Add User" and create an admin account
4. Use these credentials to log in at `/login`

### 5. Update Image Configuration

In `next.config.ts`, uncomment and update the Supabase storage URL:

```typescript
{
  protocol: 'https',
  hostname: '<your-project-id>.supabase.co',
  port: '',
  pathname: '/storage/v1/object/public/**',
},
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) to view the application.

## 🏗️ Build

```bash
# Standard Next.js build
npm run build

# Build for Cloudflare Pages
npm run build:cf
```

## 📦 Deployment

### Cloudflare Pages

```bash
npm run deploy
```

### Vercel/Other Platforms

Standard Next.js deployment process applies. Make sure to:
1. Set environment variables in your platform
2. Configure build command: `npm run build`
3. Set output directory: `.next`

## 📁 Project Structure

```
octetsys/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── admin/             # Admin panel (protected)
│   │   │   ├── posts/         # Blog post management
│   │   │   ├── profile/       # User profile editing
│   │   │   └── team/          # Team member listing
│   │   ├── blog/              # Public blog pages
│   │   ├── news/              # News pages
│   │   ├── events/            # Events pages
│   │   ├── about/             # About page with team
│   │   └── ...                # Other public pages
│   ├── components/            # React components
│   │   ├── ui/               # Shadcn/ui components
│   │   ├── about/            # About page components
│   │   ├── home/             # Homepage components
│   │   └── ...               # Other components
│   ├── lib/                   # Utility functions
│   │   └── supabase/         # Supabase client setup
│   └── types/                 # TypeScript type definitions
│       ├── database.ts        # Database schema types
│       └── supabase.ts        # Helper types
├── supabase/
│   └── migrations/            # Database migrations
├── public/                    # Static assets
└── ...config files

```

## 🔐 Security Features

- Row Level Security (RLS) on all database tables
- Secure authentication with Supabase Auth
- File upload validation (size, type)
- Security headers (CSP, HSTS, etc.)
- Protected admin routes

## 🎨 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Rich Text Editor**: Tiptap
- **Form Handling**: React Hook Form + Zod
- **Deployment**: Cloudflare Workers (Edge Runtime)

## 📝 Key Features

### Admin Panel
- Secure authentication required
- Blog post creation and editing with rich text editor
- Image upload with validation
- Team member management
- Profile editing

### Blog System
- Support for blog posts, news articles, and events
- Rich text content with Tiptap editor
- SEO fields (title, description, tags)
- Image uploads
- Draft/published status
- Full-text search capability

### Team Profiles
- Team member profiles with avatars
- Bio and role information
- Social media links (Twitter, LinkedIn)
- Dynamic display on About page

### SEO
- Dynamic metadata for all pages
- Automatic sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card support

## 🐛 Troubleshooting

### TypeScript Errors

If you encounter TypeScript errors during development:
1. Run `npm run typecheck` to see all errors
2. Most errors should be resolved with the type definitions in `src/types/`
3. For strict builds, set `ENFORCE_STRICT_BUILD=true`

### Database Connection Issues

1. Verify your Supabase credentials in `.env.local`
2. Check that all migrations have been applied
3. Ensure RLS policies are enabled

### Image Upload Issues

1. Verify the `images` storage bucket exists in Supabase
2. Check storage policies are correctly set
3. Ensure image URL is added to `next.config.ts` remote patterns

## 📄 License

[Your License Here]

## 🤝 Contributing

[Your Contributing Guidelines Here]

## 📧 Support

[Your Support Contact Here]
