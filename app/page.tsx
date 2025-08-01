import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { getPosts } from "./lib/posts"
import AdSlot from "./components/ad-slot"
import NewsletterSignup from "./components/newsletter-signup"

async function FeaturedPosts() {
  const posts = await getPosts({ limit: 6, published: true })

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-video relative">
            <Image
              src={post.coverImage || "/placeholder.svg?height=200&width=400&query=blog post cover"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.createdAt).toLocaleDateString()}
              <User className="h-4 w-4 ml-2" />
              {post.author}
            </div>
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link href={`/posts/${post.slug}`}>
                <Button variant="ghost" size="sm">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Online Passive Income Blog
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/categories" className="hover:text-primary">
                Categories
              </Link>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
              <Link href="/admin" className="hover:text-primary">
                Admin
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search posts..." className="pl-10 w-64" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Build Your Passive Income Empire</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover proven strategies to create multiple income streams online. Join thousands of entrepreneurs
            building financial freedom through smart passive income tactics.
          </p>
          <NewsletterSignup />
        </div>
      </section>

      {/* Ad Slot */}
      <div className="container mx-auto px-4 py-8">
        <AdSlot slot="header-banner" />
      </div>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
          <Suspense
            fallback={
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video bg-muted animate-pulse" />
                    <CardHeader>
                      <div className="h-4 bg-muted animate-pulse rounded mb-2" />
                      <div className="h-6 bg-muted animate-pulse rounded" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-4 bg-muted animate-pulse rounded" />
                        <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            }
          >
            <FeaturedPosts />
          </Suspense>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold mb-4">Online Passive Income Blog</h3>
              <p className="text-sm text-muted-foreground">
                Your ultimate resource for building sustainable passive income streams online.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/categories" className="hover:text-primary">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/categories/tech" className="hover:text-primary">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/categories/business" className="hover:text-primary">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/categories/lifestyle" className="hover:text-primary">
                    Lifestyle
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">Get the latest posts delivered to your inbox.</p>
              <NewsletterSignup compact />
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Online Passive Income Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
