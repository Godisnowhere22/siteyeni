/*
  # Add unique constraint to prevent double booking

  1. Changes
    - Add unique constraint on (date, time) combination
    - This prevents multiple bookings for the same time slot at database level
    
  2. Security
    - Database-level protection against race conditions
    - Ensures data integrity
*/

-- Add unique constraint to prevent double booking
ALTER TABLE meeting_slots 
ADD CONSTRAINT meeting_slots_date_time_unique 
UNIQUE (date, time);

-- Add index for better performance on date/time queries
CREATE INDEX IF NOT EXISTS idx_meeting_slots_date_time 
ON meeting_slots (date, time);

-- Add index for availability queries
CREATE INDEX IF NOT EXISTS idx_meeting_slots_availability 
ON meeting_slots (date, time, is_available);