import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://osyayqrjhyjauvatwtyc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zeWF5cXJqaHlqYXV2YXR3dHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMjU5NzEsImV4cCI6MjA1MzYwMTk3MX0.GxZr_MQ5L-OrAD_Q8kUdlCW5FZxRvJ8p06YpDzl-w_c')