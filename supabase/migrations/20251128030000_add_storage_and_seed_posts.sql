-- Create storage bucket for post images
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('images', 'images', true, 10485760, ARRAY['image/jpeg', 'image/png', 'image/gif'])
on conflict (id) do nothing;

-- Set up row-level security policies for 'images' bucket
-- Allow public read access to all files in bucket
create policy "Public read access for all images"
on storage.objects for select
using ( bucket_id = 'images' );

-- Allow authenticated users to upload files
create policy "Allow authenticated uploads"
on storage.objects for insert to authenticated
with check ( bucket_id = 'images' );

-- Allow authenticated users to update their own files
create policy "Allow authenticated updates on own images"
on storage.objects for update to authenticated
using ( auth.uid() = owner )
with check ( bucket_id = 'images' );

-- Allow authenticated users to delete their own files
create policy "Allow authenticated deletes on own images"
on storage.objects for delete to authenticated
using ( auth.uid() = owner );

-- Seed posts table with some initial content
-- This will only run once when migration is applied.
-- Note: Replace 'uuid_generate_v4()' with your actual user IDs if you have them,
-- or use a valid UUID for a user in your auth.users table.
-- For this example, we assume an auth user exists. We'll use a placeholder.
-- In a real scenario, you'd get the user ID from your auth system.

-- To find a user's UUID, you can run this query in your Supabase SQL editor:
-- SELECT id FROM auth.users WHERE email = 'your-email@example.com';

-- Insert a sample blog post (only if image column exists)
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'posts' AND column_name = 'image'
    ) THEN
        INSERT INTO public.posts (title, content, type, status, image, author_id)
        SELECT
            'The Rise of AI in Cybersecurity',
            '<p>Artificial Intelligence is no longer a futuristic concept; it''s a present-day reality transforming industries, and cybersecurity is no exception. AI-powered systems can analyze millions of events and identify threats faster and more accurately than humanly possible. In this post, we explore how AI is being used to detect malware, automate threat response, and predict future attack vectors.</p><h2>Key Applications</h2><ul><li><strong>Threat Detection:</strong> AI algorithms can identify subtle patterns and anomalies that indicate a sophisticated cyberattack.</li><li><strong>Automated Response:</strong> Once a threat is detected, AI can automatically initiate defensive measures, such as isolating affected systems, to contain the breach in real-time.</li><li><strong>Behavioral Analysis:</strong> By learning the normal behavior of users and systems, AI can spot deviations that may signal an insider threat or a compromised account.</li></ul><p>While AI presents a powerful new weapon for defenders, it''s also being leveraged by attackers. Staying ahead requires continuous innovation and a proactive security strategy that integrates AI at its core.</p>',
            'blog',
            'published',
            'https://picsum.photos/seed/aipost/1200/800',
            (SELECT id FROM auth.users LIMIT 1) -- Assign to the first user found
        ON CONFLICT (id) DO NOTHING;

        -- Insert a sample event (only if image column exists)
        INSERT INTO public.posts (title, content, type, status, image, author_id)
        SELECT
            'Annual Cybersecurity Summit 2025',
            '<p>Join us for the premier cybersecurity event of the year! The Annual Cybersecurity Summit brings together industry leaders, security professionals, and researchers to discuss the latest trends, challenges, and innovations in the field.</p><h2>Event Details</h2><ul><li><strong>Date:</strong> October 26-28, 2025</li><li><strong>Location:</strong> Bingu International Convention Centre, Lilongwe</li><li><strong>Keynote Speaker:</strong> Jane Doe, Global Head of Cyber Intelligence</li></ul><p>This year''s theme is "Building a Resilient Digital Future." Sessions will cover everything from Zero Trust architecture to post-quantum cryptography. Don''t miss this opportunity to network with peers and learn from the best in the business.</p><p>Registration opens August 1st. Early bird tickets are available for a limited time.</p>',
            'event',
            'published',
            'https://picsum.photos/seed/eventpost/1200/800',
            (SELECT id FROM auth.users LIMIT 1) -- Assign to the first user found
        ON CONFLICT (id) DO NOTHING;
    END IF;
END $$;