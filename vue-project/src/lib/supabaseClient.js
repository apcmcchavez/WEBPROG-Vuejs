import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://fylozuroogwzgyggvvlo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5bG96dXJvb2d3emd5Z2d2dmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMjcwMzUsImV4cCI6MjA1MzYwMzAzNX0.jKDjOiTAfGTaFgu-JHatUg1kzUbO4yaybupGI4JkW7c')