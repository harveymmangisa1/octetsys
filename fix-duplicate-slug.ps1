# Fix Duplicate Slug Error

Write-Host "=== Fixing Duplicate Slug Error ===" -ForegroundColor Cyan
Write-Host ""

Write-Host "The duplicate key error happens because:" -ForegroundColor Yellow
Write-Host "  1. Multiple posts with similar titles create the same slug" -ForegroundColor White
Write-Host "  2. The database has a unique constraint on slugs" -ForegroundColor White
Write-Host "  3. The trigger was interfering with application-level slug generation" -ForegroundColor White
Write-Host ""

Write-Host "Solution Applied:" -ForegroundColor Green
Write-Host "  ✓ Updated slug generation to include timestamp + random component" -ForegroundColor White
Write-Host "  ✓ Slugs now look like: 'post-title-abc123xyz'" -ForegroundColor White
Write-Host "  ✓ Better error messages for duplicate slug scenarios" -ForegroundColor White
Write-Host ""

Write-Host "To Complete the Fix:" -ForegroundColor Green
Write-Host "---------------------------------------" -ForegroundColor Gray
Write-Host ""

Write-Host "Step 1: Apply the Database Migration" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Go to Supabase Dashboard → SQL Editor and run:" -ForegroundColor White
Write-Host "  supabase/migrations/20251130020000_remove_slug_trigger.sql" -ForegroundColor Yellow
Write-Host ""
Write-Host "  This will:" -ForegroundColor White
Write-Host "    • Remove the conflicting database trigger" -ForegroundColor Gray
Write-Host "    • Fix any existing duplicate slugs" -ForegroundColor Gray
Write-Host "    • Verify all posts have unique slugs" -ForegroundColor Gray
Write-Host ""

Write-Host "Step 2: Test Creating a Post" -ForegroundColor Cyan
Write-Host ""
Write-Host "  1. Go to /admin/posts/new" -ForegroundColor White
Write-Host "  2. Create a new post" -ForegroundColor White
Write-Host "  3. Click 'Publish'" -ForegroundColor White
Write-Host "  4. Should succeed without duplicate key error" -ForegroundColor White
Write-Host ""

Write-Host "Step 3: Verify Slug Format" -ForegroundColor Cyan
Write-Host ""
Write-Host "  New posts will have slugs like:" -ForegroundColor White
Write-Host "    my-blog-post-lkj3h4k5" -ForegroundColor Yellow
Write-Host "    another-post-m9n2p1q8" -ForegroundColor Yellow
Write-Host ""
Write-Host "  The suffix ensures uniqueness even for similar titles" -ForegroundColor Gray
Write-Host ""

Write-Host "Why This Works:" -ForegroundColor Green
Write-Host "---------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "  Old approach:" -ForegroundColor Yellow
Write-Host "    'My Blog Post' → 'my-blog-post'" -ForegroundColor Gray
Write-Host "    'My Blog Post' → 'my-blog-post' ❌ DUPLICATE!" -ForegroundColor Red
Write-Host ""
Write-Host "  New approach:" -ForegroundColor Green
Write-Host "    'My Blog Post' → 'my-blog-post-lkj3h4k5'" -ForegroundColor Gray
Write-Host "    'My Blog Post' → 'my-blog-post-m9n2p1q8' ✓ UNIQUE!" -ForegroundColor Green
Write-Host ""

Write-Host "If You Still Get Errors:" -ForegroundColor Yellow
Write-Host "---------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "  1. Make sure you applied the migration" -ForegroundColor White
Write-Host "  2. Check for existing duplicate slugs:" -ForegroundColor White
Write-Host ""
Write-Host "     SELECT slug, COUNT(*) FROM posts" -ForegroundColor Yellow
Write-Host "     GROUP BY slug HAVING COUNT(*) > 1;" -ForegroundColor Yellow
Write-Host ""
Write-Host "  3. If duplicates exist, run:" -ForegroundColor White
Write-Host ""
Write-Host "     UPDATE posts SET slug = slug || '-' || id" -ForegroundColor Yellow
Write-Host "     WHERE id IN (" -ForegroundColor Yellow
Write-Host "       SELECT id FROM posts WHERE slug IN (" -ForegroundColor Yellow
Write-Host "         SELECT slug FROM posts" -ForegroundColor Yellow
Write-Host "         GROUP BY slug HAVING COUNT(*) > 1" -ForegroundColor Yellow
Write-Host "       )" -ForegroundColor Yellow
Write-Host "     );" -ForegroundColor Yellow
Write-Host ""

Write-Host "Summary:" -ForegroundColor Green
Write-Host "---------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "  ✓ Code updated to generate unique slugs" -ForegroundColor Green
Write-Host "  ✓ Migration ready to fix database" -ForegroundColor Green
Write-Host "  ✓ Better error messages added" -ForegroundColor Green
Write-Host ""
Write-Host "  Next: Apply the migration in Supabase Dashboard" -ForegroundColor Cyan
Write-Host ""

Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
