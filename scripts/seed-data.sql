-- Seed the database with initial data
-- This script populates the database with sample content

-- Insert sample tags
INSERT INTO tags (name) VALUES 
    ('Technology'),
    ('Web Development'),
    ('JavaScript'),
    ('React'),
    ('Next.js'),
    ('Business'),
    ('Monetization'),
    ('Blogging'),
    ('SEO'),
    ('Marketing')
ON CONFLICT (name) DO NOTHING;

-- Insert sample posts
INSERT INTO posts (title, slug, excerpt, content, cover_image, author, published) VALUES 
(
    'Getting Started with Next.js 15',
    'getting-started-nextjs-15',
    'Learn how to build modern web applications with the latest version of Next.js.',
    '<h2>Introduction</h2><p>Next.js 15 brings exciting new features and improvements that make building React applications even better. In this comprehensive guide, we''ll explore the key features and how to get started.</p><h2>Key Features</h2><ul><li>Improved App Router with better performance</li><li>Enhanced Server Components</li><li>Better TypeScript support</li><li>Optimized bundling and compilation</li></ul><h2>Getting Started</h2><p>To create a new Next.js 15 project, run the following command:</p><pre><code>npx create-next-app@latest my-app</code></pre><p>This will set up a new project with all the latest features and best practices.</p>',
    '/placeholder.svg?height=400&width=800',
    'Tech Writer',
    true
),
(
    'Building a Profitable Blog: Monetization Strategies',
    'profitable-blog-monetization-strategies',
    'Discover proven strategies to monetize your blog and turn your passion into profit.',
    '<h2>Introduction</h2><p>Monetizing a blog requires strategy, patience, and the right approach. Here are the most effective methods to generate revenue from your content.</p><h2>Top Monetization Methods</h2><h3>1. Affiliate Marketing</h3><p>Promote products you believe in and earn commissions on sales. Choose products that align with your audience''s interests.</p><h3>2. Display Advertising</h3><p>Use platforms like Google AdSense to display relevant ads on your blog. Focus on high-traffic content for better returns.</p><h3>3. Sponsored Content</h3><p>Partner with brands to create sponsored posts that provide value to your readers while generating income.</p><h2>Building Your Audience</h2><p>Before monetizing, focus on building a loyal audience through consistent, valuable content.</p>',
    '/placeholder.svg?height=400&width=800',
    'Business Expert',
    true
),
(
    'The Future of Web Development',
    'future-of-web-development',
    'Explore emerging trends and technologies shaping the future of web development.',
    '<h2>Emerging Technologies</h2><p>The web development landscape is constantly evolving. Here are the key trends to watch:</p><h3>AI Integration</h3><p>Artificial intelligence is becoming more integrated into web development workflows, from code generation to user experience optimization.</p><h3>WebAssembly</h3><p>WebAssembly enables high-performance applications in the browser, opening new possibilities for web applications.</p><h3>Edge Computing</h3><p>Moving computation closer to users for better performance and user experience.</p>',
    '/placeholder.svg?height=400&width=800',
    'Tech Futurist',
    false
)
ON CONFLICT (slug) DO NOTHING;

-- Link posts with tags
INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE (p.slug = 'getting-started-nextjs-15' AND t.name IN ('Technology', 'Web Development', 'JavaScript', 'Next.js'))
   OR (p.slug = 'profitable-blog-monetization-strategies' AND t.name IN ('Business', 'Monetization', 'Blogging', 'Marketing'))
   OR (p.slug = 'future-of-web-development' AND t.name IN ('Technology', 'Web Development'))
ON CONFLICT DO NOTHING;

-- Insert sample admin user (password: 'password' - change this in production!)
INSERT INTO users (email, password_hash, name, role) VALUES 
    ('admin@example.com', '$2b$10$rQZ9QmjlZKZZ9QmjlZKZZOeKZZ9QmjlZKZZ9QmjlZKZZ9QmjlZKZZO', 'Admin User', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert sample comments
INSERT INTO comments (post_id, author, email, content, approved) 
SELECT p.id, 'John Doe', 'john@example.com', 'Great post! Very informative and well-written.', true
FROM posts p WHERE p.slug = 'getting-started-nextjs-15'
UNION ALL
SELECT p.id, 'Jane Smith', 'jane@example.com', 'Thanks for sharing this. I learned something new today!', true
FROM posts p WHERE p.slug = 'getting-started-nextjs-15'
ON CONFLICT DO NOTHING;
