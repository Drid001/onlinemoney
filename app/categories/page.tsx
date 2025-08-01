import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPosts } from "../lib/posts"

export default async function CategoriesPage() {
  const posts = await getPosts({ published: true })

  // Group posts by tags
  const categories = posts.reduce(
    (acc, post) => {
      post.tags.forEach((tag) => {
        if (!acc[tag]) {
          acc[tag] = []
        }
        acc[tag].push(post)
      })
      return acc
    },
    {} as Record<string, typeof posts>,
  )

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
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Categories</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(categories).map(([category, categoryPosts]) => (
            <Card key={category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {category}
                  <Badge variant="secondary">{categoryPosts.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categoryPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} href={`/posts/${post.slug}`} className="block text-sm hover:text-primary">
                      {post.title}
                    </Link>
                  ))}
                  {categoryPosts.length > 3 && (
                    <p className="text-xs text-muted-foreground">+{categoryPosts.length - 3} more posts</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
