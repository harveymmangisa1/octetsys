-- Update public_reports view to show all reports (remove approval requirement temporarily)
DROP VIEW IF EXISTS public.public_reports;

CREATE VIEW public.public_reports AS
SELECT
    id,
    created_at,
    violence_type,
    description,
    platform,
    severity
FROM
    public.cyber_violence_reports
WHERE
    status IS NOT NULL OR status IS NULL; -- Show all reports regardless of status