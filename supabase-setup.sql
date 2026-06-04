-- Run this in your Supabase SQL Editor

-- Create courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  progress INTEGER NOT NULL CHECK (progress >= 0 AND progress <= 100),
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Seed data (insert 4 courses)
INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'Cpu'),
  ('Mastering Framer Motion', 42, 'Sparkles'),
  ('TypeScript Mastery', 88, 'Code2'),
  ('Next.js 15 Essentials', 23, 'Globe');

-- Verify data
SELECT * FROM courses;