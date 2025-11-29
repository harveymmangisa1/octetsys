-- Manual profile creation for debugging
-- This will create a profile for your user if it doesn't exist
-- Replace 'your-user-id' with your actual user ID from auth.users

-- First, let's check what users exist
SELECT id, email, created_at FROM auth.users;

-- Then check what profiles exist
SELECT id, full_name, email, created_at FROM public.profiles;