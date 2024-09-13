import { createClient } from "@supabase/supabase-js";
const supabaseURL = 'https://kqtpmghjqdnholqnifzp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdHBtZ2hqcWRuaG9scW5pZnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4OTExNzUsImV4cCI6MjA0MTQ2NzE3NX0.DmxzvKve6T4quEuFPczOHxEkqTJ0kKCW7IH59qBJs2k';
export const supabase = createClient(supabaseURL, supabaseAnonKey)