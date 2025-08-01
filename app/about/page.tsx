import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Online Passive Income Blog
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <Link href="/categories" className="hover:text-primary">
                Categories
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Online Passive Income Blog</h1>

        <Card>
          <CardContent className="prose prose-lg max-w-none p-8">
            <p>
              Welcome to Online Passive Income Blog, your premier destination for learning how to build sustainable
              passive income streams online. Our mission is to provide entrepreneurs and aspiring business owners with
              actionable strategies to achieve financial freedom.
            </p>

            <h2>Our Mission</h2>
            <p>
              We believe everyone deserves financial independence. Through proven online business strategies, affiliate
              marketing techniques, and passive income systems, we help you build wealth while you sleep.
            </p>

            <h2>What You'll Learn</h2>
            <ul>
              <li>Affiliate marketing strategies that generate consistent commissions</li>
              <li>Blog monetization techniques for sustainable income</li>
              <li>Digital product creation and passive sales systems</li>
              <li>Investment strategies for long-term wealth building</li>
              <li>Online business automation and scaling tactics</li>
            </ul>

            <h2>Start Your Journey</h2>
            <p>
              Ready to build your passive income empire? Explore our latest posts for step-by-step guides, case studies,
              and proven strategies. Whether you're just starting or looking to scale existing income streams, we have
              the resources to accelerate your success.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
