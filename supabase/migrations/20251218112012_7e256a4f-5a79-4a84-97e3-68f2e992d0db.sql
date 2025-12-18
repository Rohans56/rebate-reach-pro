-- Drop the existing restrictive SELECT policy
DROP POLICY IF EXISTS "Service role can view leads" ON public.leads;

-- Create a new policy that allows service role to view leads
CREATE POLICY "Service role can view leads"
  ON public.leads
  FOR SELECT
  USING (auth.role() = 'service_role');