import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface MeetingSlot {
  id: string;
  date: string;
  time: string;
  is_available: boolean;
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  customer_company?: string;
  meeting_type?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  meetingType: string;
  notes?: string;
}