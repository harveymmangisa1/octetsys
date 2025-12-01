-- Drop the function if it exists to ensure a clean slate
DROP FUNCTION IF EXISTS public.create_anonymous_report(text, text, text, text, text, boolean, text[], text);

-- Create the function with the correct return type (text)
CREATE OR REPLACE FUNCTION public.create_anonymous_report(
    violence_type_in text,
    description_in text,
    platform_in text,
    severity_in text,
    additional_details_in text,
    help_received_in boolean,
    desired_help_types_in text[],
    gender_in text
)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    new_report_id bigint;
BEGIN
    INSERT INTO cyber_violence_reports(
        violence_type,
        description,
        platform,
        severity,
        additional_details,
        help_received,
        desired_help_types,
        gender,
        status
    )
    VALUES (
        violence_type_in,
        description_in,
        platform_in,
        severity_in,
        additional_details_in,
        help_received_in,
        desired_help_types_in,
        gender_in,
        'submitted'
    )
    RETURNING id INTO new_report_id;

    RETURN new_report_id::text;
END;
$$;

-- Grant permissions
GRANT EXECUTE ON FUNCTION public.create_anonymous_report(
    violence_type_in text,
    description_in text,
    platform_in text,
    severity_in text,
    additional_details_in text,
    help_received_in boolean,
    desired_help_types_in text[],
    gender_in text
) TO anon, authenticated;
