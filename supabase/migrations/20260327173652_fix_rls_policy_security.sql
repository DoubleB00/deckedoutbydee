/*
  # Fix RLS Security Policy

  1. Changes
    - Drop the existing unrestricted RLS policy on `order_requests`
    - Create a more secure policy that validates data before insertion
    - Ensure all required fields are present and not empty
    - Add reasonable length limits to prevent abuse
    
  2. Security
    - Validate that required fields (full_name, email, phone, order_type, custom_details) are not empty
    - Ensure email format is valid
    - Limit text field lengths to prevent database abuse
    - Maintain public access for legitimate form submissions while adding data validation
*/

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can submit order requests" ON order_requests;

-- Create a more secure policy with proper validation
CREATE POLICY "Allow valid order submissions"
  ON order_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure required fields are not empty
    length(trim(full_name)) > 0 AND
    length(trim(email)) > 0 AND
    length(trim(phone)) > 0 AND
    length(trim(order_type)) > 0 AND
    length(trim(custom_details)) > 0 AND
    
    -- Validate reasonable field lengths to prevent abuse
    length(full_name) <= 100 AND
    length(email) <= 255 AND
    length(phone) <= 20 AND
    length(order_type) <= 50 AND
    length(custom_details) <= 2000 AND
    
    -- Basic email validation (contains @ and .)
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    
    -- Ensure status is set to pending (prevent status manipulation)
    (status IS NULL OR status = 'pending')
  );