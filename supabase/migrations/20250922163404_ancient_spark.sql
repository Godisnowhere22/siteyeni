/*
  # Fix RLS policies for meeting booking

  1. Security Updates
    - Drop existing restrictive policies
    - Create new policies allowing anonymous users to book meetings
    - Allow INSERT operations for anonymous and authenticated users
    - Allow UPDATE operations for booking meetings
    - Maintain SELECT permissions for viewing available slots

  2. Changes
    - Remove policies that block anonymous bookings
    - Add permissive policies for meeting booking workflow
    - Ensure anonymous users can create and update meeting slots
*/

-- Drop existing policies that are too restrictive
DROP POLICY IF EXISTS "Anyone can book available slots" ON meeting_slots;
DROP POLICY IF EXISTS "Anyone can update slots when booking" ON meeting_slots;
DROP POLICY IF EXISTS "Anyone can view available slots" ON meeting_slots;
DROP POLICY IF EXISTS "Authenticated users can manage all slots" ON meeting_slots;

-- Create new permissive policies for meeting booking
CREATE POLICY "Allow anonymous and authenticated users to view slots"
  ON meeting_slots
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow anonymous and authenticated users to insert slots"
  ON meeting_slots
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow anonymous and authenticated users to update slots"
  ON meeting_slots
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users full access"
  ON meeting_slots
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);