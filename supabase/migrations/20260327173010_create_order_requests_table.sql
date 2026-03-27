/*
  # Create order_requests table

  1. New Tables
    - `order_requests`
      - `id` (uuid, primary key) - Unique identifier for each order
      - `full_name` (text) - Customer's full name
      - `email` (text) - Customer's email address
      - `phone` (text) - Customer's phone number for text confirmations
      - `order_type` (text) - Type of order (Stadium Bag, Gift, Event, Other)
      - `custom_details` (text) - Detailed description of what the customer wants
      - `reference_image_url` (text, optional) - URL to uploaded reference image
      - `status` (text) - Order status (pending, approved, completed)
      - `created_at` (timestamptz) - Timestamp when order was submitted
      
  2. Security
    - Enable RLS on `order_requests` table
    - Add policy for anyone to insert orders (public form submission)
    - Add policy for authenticated users to read all orders (for business owner)
*/

CREATE TABLE IF NOT EXISTS order_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  order_type text NOT NULL,
  custom_details text NOT NULL,
  reference_image_url text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE order_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit an order (public form)
CREATE POLICY "Anyone can submit order requests"
  ON order_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (business owner) to view all orders
CREATE POLICY "Authenticated users can view all orders"
  ON order_requests
  FOR SELECT
  TO authenticated
  USING (true);