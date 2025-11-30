# Blog Post Slug Diagnostic and Fix Script

Write-Host "=== Blog Post Slug Diagnostic Tool ===" -ForegroundColor Cyan
Write-Host ""

Write-Host "This script will help diagnose and fix blog post slug issues." -ForegroundColor Yellow
Write-Host ""

Write-Host "Step 1: Apply the slug fix migration" -ForegroundColor Green
Write-Host "---------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "You need to apply the migration to your Supabase database:" -ForegroundColor White
Write-Host ""
Write-Host "Option A - Supabase Dashboard (Recommended):" -ForegroundColor Cyan
Write-Host "  1. Go to your Supabase Dashboard" -ForegroundColor White
Write-Host "  2. Navigate to SQL Editor" -ForegroundColor White
Write-Host "  3. Copy the contents of:" -ForegroundColor White
Write-Host "     supabase/migrations/20251130010000_fix_all_post_slugs.sql" -ForegroundColor Yellow
Write-Host "  4. Paste and run the SQL" -ForegroundColor White
Write-Host "  5. Check the output to verify all posts have slugs" -ForegroundColor White
Write-Host ""

Write-Host "Option B - Supabase CLI:" -ForegroundColor Cyan
Write-Host "  supabase db push" -ForegroundColor Yellow
Write-Host ""

Write-Host "Step 2: Verify the fix" -ForegroundColor Green
Write-Host "---------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "After applying the migration, check your blog:" -ForegroundColor White
Write-Host "  1. Navigate to /blog on your website" -ForegroundColor White
Write-Host "  2. Click on a blog post" -ForegroundColor White
Write-Host "  3. Verify the URL looks like: /blog/post-title-abc123" -ForegroundColor White
Write-Host ""

Write-Host "Step 3: Check the browser console" -ForegroundColor Green
Write-Host "---------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "If you still get 404 errors:" -ForegroundColor White
Write-Host "  1. Open browser DevTools (F12)" -ForegroundColor White
Write-Host "  2. Go to the Console tab" -ForegroundColor White
Write-Host "  3. Look for messages like:" -ForegroundColor White
Write-Host "     'Fetching blog post with slug: ...'" -ForegroundColor Gray
Write-Host "     'Post not found for slug: ...'" -ForegroundColor Gray
Write-Host "  4. Share these messages for further debugging" -ForegroundColor White
Write-Host ""

Write-Host "Common Issues:" -ForegroundColor Green
Write-Host "---------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "1. Migration not applied" -ForegroundColor Yellow
Write-Host "   Solution: Apply the migration using Option A or B above" -ForegroundColor White
Write-Host ""
Write-Host "2. Posts created before slug column existed" -ForegroundColor Yellow
Write-Host "   Solution: The migration will automatically generate slugs for all existing posts" -ForegroundColor White
Write-Host ""
Write-Host "3. Cached old URLs" -ForegroundColor Yellow
Write-Host "   Solution: Clear your browser cache or try in incognito mode" -ForegroundColor White
Write-Host ""

Write-Host "Need Help?" -ForegroundColor Green
Write-Host "---------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "If issues persist after applying the migration:" -ForegroundColor White
Write-Host "  1. Check the Supabase logs for errors" -ForegroundColor White
Write-Host "  2. Verify the 'slug' column exists in the 'posts' table" -ForegroundColor White
Write-Host "  3. Run this SQL to check slug status:" -ForegroundColor White
Write-Host ""
Write-Host "     SELECT id, title, slug FROM posts WHERE slug IS NULL;" -ForegroundColor Yellow
Write-Host ""

Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
