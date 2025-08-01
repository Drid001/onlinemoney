// Mock data - In a real app, this would connect to your database
export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: string
  author: string
  published: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
}

const mockPosts: Post[] = [
  {
    id: "1",
    title: "10 Proven Passive Income Streams You Can Start Today",
    slug: "10-proven-passive-income-streams-start-today",
    excerpt:
      "Discover the most effective passive income strategies that require minimal ongoing effort but generate consistent returns.",
    content: `
      <h2>Introduction</h2>
      <p>Building passive income is the key to financial freedom. These 10 proven strategies can help you start generating money while you sleep, with minimal ongoing effort required.</p>
      
      <h2>Top 10 Passive Income Streams</h2>
      <h3>1. Affiliate Marketing</h3>
      <p>Promote products you believe in and earn commissions on every sale. Focus on high-converting niches like finance, health, and technology.</p>
      
      <h3>2. Create Online Courses</h3>
      <p>Package your expertise into digital courses that sell 24/7 on platforms like Udemy, Teachable, or your own website.</p>
      
      <h3>3. Dividend Investing</h3>
      <p>Build a portfolio of dividend-paying stocks that provide regular income payments.</p>
      
      <h3>4. Real Estate Investment Trusts (REITs)</h3>
      <p>Invest in real estate without the hassle of property management through publicly traded REITs.</p>
      
      <h3>5. Print-on-Demand Products</h3>
      <p>Design t-shirts, mugs, and other products that are printed and shipped automatically when ordered.</p>
      
      <h2>Getting Started</h2>
      <p>Choose 1-2 strategies that align with your skills and interests. Focus on building one income stream at a time before expanding to others.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    author: "Emma Madrid",
    published: true,
    tags: ["Passive Income", "Affiliate Marketing", "Online Business", "Financial Freedom"],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "How I Built a $5,000/Month Affiliate Marketing Business",
    slug: "how-i-built-5000-month-affiliate-marketing-business",
    excerpt: "A detailed case study of how I went from zero to $5,000 monthly recurring affiliate income in 12 months.",
    content: `
      <h2>My Affiliate Marketing Journey</h2>
      <p>Twelve months ago, I was making $0 from affiliate marketing. Today, I consistently earn over $5,000 per month in passive affiliate commissions. Here's exactly how I did it.</p>
      
      <h2>The Strategy That Changed Everything</h2>
      <h3>1. Niche Selection</h3>
      <p>I focused on the personal finance niche, specifically targeting people interested in passive income and investing.</p>
      
      <h3>2. Content Creation</h3>
      <p>I published 3 high-quality blog posts per week, each targeting specific keywords with commercial intent.</p>
      
      <h3>3. Email List Building</h3>
      <p>I created a free "Passive Income Starter Kit" that captured over 10,000 email subscribers in 6 months.</p>
      
      <h3>4. Product Selection</h3>
      <p>I only promoted products I personally used and believed in, focusing on high-ticket items with recurring commissions.</p>
      
      <h2>Monthly Breakdown</h2>
      <ul>
        <li>Month 1-3: $0 - $200 (learning and building)</li>
        <li>Month 4-6: $500 - $1,500 (first breakthrough)</li>
        <li>Month 7-9: $2,000 - $3,500 (scaling up)</li>
        <li>Month 10-12: $4,000 - $5,500 (consistent growth)</li>
      </ul>
      
      <h2>Key Takeaways</h2>
      <p>Success in affiliate marketing requires patience, consistency, and genuine value creation. Focus on helping your audience solve real problems, and the commissions will follow.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    author: "Emma Madrid",
    published: true,
    tags: ["Affiliate Marketing", "Case Study", "Online Business", "Success Story"],
    createdAt: "2024-01-14T15:30:00Z",
    updatedAt: "2024-01-14T15:30:00Z",
  },
  {
    id: "3",
    title: "The Ultimate Guide to Blog Monetization in 2024",
    slug: "ultimate-guide-blog-monetization-2024",
    excerpt:
      "Learn the most effective ways to monetize your blog and turn your content into a profitable passive income machine.",
    content: `
      <h2>Blog Monetization Strategies That Work</h2>
      <p>Turning your blog into a money-making machine requires the right monetization strategies. Here are the most effective methods for 2024.</p>
      
      <h3>1. Display Advertising</h3>
      <p>Start with Google AdSense, then upgrade to premium networks like Mediavine or AdThrive once you reach their traffic requirements.</p>
      
      <h3>2. Affiliate Marketing</h3>
      <p>The highest-earning monetization method for most bloggers. Focus on products that solve your audience's problems.</p>
      
      <h3>3. Digital Products</h3>
      <p>Create and sell your own digital products like ebooks, courses, or templates for maximum profit margins.</p>
      
      <h3>4. Sponsored Content</h3>
      <p>Partner with brands for sponsored posts, but maintain authenticity and only work with companies you trust.</p>
      
      <h3>5. Email Marketing</h3>
      <p>Build an email list and monetize through product recommendations, affiliate offers, and your own products.</p>
      
      <h2>Revenue Optimization Tips</h2>
      <ul>
        <li>Track your metrics and focus on what's working</li>
        <li>Test different monetization methods</li>
        <li>Prioritize user experience over short-term profits</li>
        <li>Diversify your income streams</li>
      </ul>
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    author: "Emma Madrid",
    published: true,
    tags: ["Blog Monetization", "Passive Income", "Content Marketing", "Online Business"],
    createdAt: "2024-01-13T09:15:00Z",
    updatedAt: "2024-01-13T09:15:00Z",
  },
]

export async function getPosts({ limit, published }: { limit?: number; published?: boolean } = {}) {
  let posts = [...mockPosts]

  if (published !== undefined) {
    posts = posts.filter((post) => post.published === published)
  }

  if (limit) {
    posts = posts.slice(0, limit)
  }

  return posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = mockPosts.find((post) => post.slug === slug)
  return post || null
}

export async function createPost(postData: Omit<Post, "id" | "createdAt" | "updatedAt">): Promise<Post> {
  const newPost: Post = {
    ...postData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  mockPosts.unshift(newPost)
  return newPost
}
