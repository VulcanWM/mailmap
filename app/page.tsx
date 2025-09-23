import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Mail, TrendingUp, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock data for featured newsletters
const featuredNewsletters = [
  {
    id: 1,
    name: "Morning Brew",
    description: "Business news that doesn't put you to sleep",
    category: "Business",
    subscribers: "4M+",
    rating: 4.8,
    image: "/morning-brew-business-newsletter-logo.jpg",
  },
  {
    id: 2,
    name: "The Hustle",
    description: "Tech and business news with personality",
    category: "Tech",
    subscribers: "2M+",
    rating: 4.7,
    image: "/the-hustle-tech-newsletter-logo.jpg",
  },
  {
    id: 3,
    name: "Dense Discovery",
    description: "Weekly design and technology inspiration",
    category: "Design",
    subscribers: "50K+",
    rating: 4.9,
    image: "/dense-discovery-design-newsletter-logo.jpg",
  },
]

const categories = [
  { name: "Business", count: 234, icon: TrendingUp },
  { name: "Tech", count: 189, icon: Mail },
  { name: "Design", count: 156, icon: Star },
  { name: "Marketing", count: 143, icon: Users },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">MailMap</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/browse" className="text-muted-foreground hover:text-foreground transition-colors">
                Browse
              </Link>
              <Link href="/submit" className="text-muted-foreground hover:text-foreground transition-colors">
                Submit
              </Link>
              <Button variant="outline" size="sm" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Discover the best
            <span className="text-primary"> newsletters </span>
            for your interests
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Curated directory of high-quality newsletters across business, tech, design, and more. Find your next
            favorite read.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 transform -y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search newsletters..."
              className="w-full pl-12 pr-4 py-4 text-lg border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <Button className="absolute right-2 top-2 bottom-2 px-6">Search</Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-muted-foreground">Newsletters</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">10K+</div>
              <div className="text-muted-foreground">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link key={category.name} href={`/browse?category=${category.name.toLowerCase()}`}>
                  <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 hover:border-border">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-foreground mb-1">{category.name}</h4>
                      <p className="text-sm text-muted-foreground">{category.count} newsletters</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Newsletters */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-foreground">Featured Newsletters</h3>
            <Link href="/browse">
              <Button variant="outline" className="group bg-transparent">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredNewsletters.map((newsletter) => (
              <Link key={newsletter.id} href={`/newsletter/${newsletter.id}`}>
                <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 hover:border-border group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={newsletter.image || "/placeholder.svg"}
                        alt={newsletter.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {newsletter.name}
                          </h4>
                          <Badge variant="secondary" className="text-xs">
                            {newsletter.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{newsletter.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {newsletter.subscribers}
                          </span>
                          <span className="flex items-center">
                            <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                            {newsletter.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl font-bold text-foreground mb-4">Know a great newsletter?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Help the community discover amazing content by submitting your favorite newsletters.
          </p>
          <Link href="/submit">
            <Button size="lg" className="px-8">
              Submit Newsletter
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Mail className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">MailMap</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © 2025 MailMap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
