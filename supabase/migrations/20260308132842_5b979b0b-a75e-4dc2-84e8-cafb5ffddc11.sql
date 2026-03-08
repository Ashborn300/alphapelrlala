
-- Create storage bucket for contest uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('concours-uploads', 'concours-uploads', true);

-- Allow anyone to upload to the bucket
CREATE POLICY "Anyone can upload contest files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'concours-uploads');

-- Allow anyone to read contest files
CREATE POLICY "Anyone can read contest files" ON storage.objects FOR SELECT USING (bucket_id = 'concours-uploads');
