-- Add type column to article_images to distinguish between images and videos
ALTER TABLE public.article_images 
ADD COLUMN type text NOT NULL DEFAULT 'image';

-- Add check constraint for valid types
ALTER TABLE public.article_images 
ADD CONSTRAINT article_images_type_check CHECK (type IN ('image', 'video'));