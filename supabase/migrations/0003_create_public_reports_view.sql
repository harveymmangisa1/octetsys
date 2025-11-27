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
    status = 'approved';


CREATE POLICY "Allow public read access" ON public.cyber_violence_reports FOR SELECT USING (true);
