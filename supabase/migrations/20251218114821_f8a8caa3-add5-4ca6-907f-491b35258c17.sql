-- Add address and postcode columns to leads table
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS street_address TEXT,
ADD COLUMN IF NOT EXISTS postcode TEXT;