CREATE OR REPLACE FUNCTION public.create_anonymous_report(
    violence_type_in text,
    description_in text,
    platform_in text,
    severity_in text,
    additional_details_in text
)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    new_report_id bigint;
BEGIN
    INSERT INTO cyber_violence_reports(violence_type, description, platform, severity, additional_details, status)
    VALUES (violence_type_in, description_in, platform_in, severity_in, additional_details_in, 'submitted')
    RETURNING id INTO new_report_id;

    RETURN new_report_id;
END;
$$;
