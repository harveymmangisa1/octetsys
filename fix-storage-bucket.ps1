# Storage Bucket Fix Script
# Run this to apply the storage bucket migration

Write-Host "Applying storage bucket migration..." -ForegroundColor Cyan

# Check if Supabase CLI is available
if (Get-Command supabase -ErrorAction SilentlyContinue) {
    Write-Host "Supabase CLI found. Applying migration..." -ForegroundColor Green
    
    # Apply the migration
    supabase db push
    
    Write-Host "`nMigration applied successfully!" -ForegroundColor Green
    Write-Host "The 'images' storage bucket should now be properly configured." -ForegroundColor Green
} else {
    Write-Host "Supabase CLI not found." -ForegroundColor Yellow
    Write-Host "`nPlease apply the migration manually:" -ForegroundColor Yellow
    Write-Host "1. Go to your Supabase Dashboard" -ForegroundColor White
    Write-Host "2. Navigate to SQL Editor" -ForegroundColor White
    Write-Host "3. Copy and paste the contents of:" -ForegroundColor White
    Write-Host "   supabase/migrations/20251130000000_verify_and_fix_storage.sql" -ForegroundColor Cyan
    Write-Host "4. Run the SQL" -ForegroundColor White
    Write-Host "`nOR use the Supabase CLI:" -ForegroundColor Yellow
    Write-Host "   npm install -g supabase" -ForegroundColor White
    Write-Host "   supabase link --project-ref YOUR_PROJECT_REF" -ForegroundColor White
    Write-Host "   supabase db push" -ForegroundColor White
}

Write-Host "`nPress any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
