-- Add help-related fields to cyber_violence_reports table
-- These fields will help bridge the gap with authorities and understand what support victims need

ALTER TABLE public.cyber_violence_reports 
ADD COLUMN help_received boolean DEFAULT NULL,
ADD COLUMN desired_help_types text[] DEFAULT NULL,
ADD COLUMN gender text DEFAULT NULL;

-- Add comments for documentation
COMMENT ON COLUMN public.cyber_violence_reports.help_received IS 'Whether the victim was able to get help after the incident';
COMMENT ON COLUMN public.cyber_violence_reports.desired_help_types IS 'Types of help the victim would have liked to receive (array of options)';
COMMENT ON COLUMN public.cyber_violence_reports.gender IS 'Gender identity of the victim (for demographic analysis)';