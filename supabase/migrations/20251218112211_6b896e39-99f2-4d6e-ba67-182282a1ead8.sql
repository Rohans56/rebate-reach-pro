-- Add restrictive policy for UPDATE - only service role can update leads
CREATE POLICY "Service role can update leads"
  ON public.leads
  FOR UPDATE
  USING (auth.role() = 'service_role');

-- Add restrictive policy for DELETE - only service role can delete leads
CREATE POLICY "Service role can delete leads"
  ON public.leads
  FOR DELETE
  USING (auth.role() = 'service_role');