import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://utpupcffsaillsgoohtt.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cHVwY2Zmc2FpbGxzZ29vaHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4NTM2NDgsImV4cCI6MTk3NzQyOTY0OH0.dc6V0zo8bZ-hFnyn1cNwMMQV_9y1DsL7pQv2V7akJvE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
