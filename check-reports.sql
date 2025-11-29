-- Check existing reports and their status
SELECT 
    id, 
    violence_type, 
    description, 
    platform, 
    severity, 
    status, 
    created_at 
FROM cyber_violence_reports 
ORDER BY created_at DESC;

-- Check what the public view shows
SELECT * FROM public_reports ORDER BY created_at DESC;