"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Mail, Users, Star, Clock, Grid3X3, List } from "lucide-react"
import Link from "next/link"

// Mock data for newsletters
const allNewsletters = [
  {
    id: 1,
    name: "Morning Brew",
    description:
      "Business news that doesn't put you to sleep. Get the latest in business, tech, and finance delivered to your inbox every morning.",
    category: "Business",
    subscribers: "4M+",
    rating: 4.8,
    frequency: "Daily",
    image: "/morning-brew-business-newsletter-logo.jpg",
    tags: ["business", "finance", "tech"],
  },
  {
    id: 2,
    name: "The Hustle",
    description:
      "Tech and business news with personality. Stories that matter, told in a way that doesn't bore you to death.",
    category: "Tech",
    subscribers: "2M+",
    rating: 4.7,
    frequency: "Daily",
    image: "/the-hustle-tech-newsletter-logo.jpg",
    tags: ["tech", "business", "startup"],
  },
  {
    id: 3,
    name: "Dense Discovery",
    description:
      "Weekly design and technology inspiration. Curated links, tools, and insights for creative professionals.",
    category: "Design",
    subscribers: "50K+",
    rating: 4.9,
    frequency: "Weekly",
    image: "/dense-discovery-design-newsletter-logo.jpg",
    tags: ["design", "tech", "inspiration"],
  },
  {
    id: 4,
    name: "Marketing Examples",
    description:
      "Real marketing examples from successful companies. Learn from the best marketing campaigns and strategies.",
    category: "Marketing",
    subscribers: "100K+",
    rating: 4.6,
    frequency: "Weekly",
    image: "/marketing-newsletter-logo.jpg",
    tags: ["marketing", "business", "strategy"],
  },
  {
    id: 5,
    name: "Stratechery",
    description:
      "Analysis of the strategy and business side of technology and media. Deep dives into tech industry trends.",
    category: "Tech",
    subscribers: "75K+",
    rating: 4.8,
    frequency: "Weekly",
    image: "/tech-strategy-newsletter-logo.jpg",
    tags: ["tech", "strategy", "analysis"],
  },
  {
    id: 6,
    name: "Sidebar",
    description:
      "The 5 best design links, every weekday. Curated design inspiration, tools, and resources for designers.",
    category: "Design",
    subscribers: "30K+",
    rating: 4.7,
    frequency: "Daily",
    image: "/design-sidebar-newsletter-logo.jpg",
    tags: ["design", "inspiration", "tools"],
  },
]

const categories = ["All", "Business", "Tech", "Design", "Marketing"]
const frequencies = ["All", "Daily", "Weekly", "Monthly"]

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedFrequency, setSelectedFrequency] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")

  // Filter newsletters based on search and filters
  const filteredNewsletters = allNewsletters.filter((newsletter) => {
    const matchesSearch =
      newsletter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || newsletter.category === selectedCategory
    const matchesFrequency = selectedFrequency === "All" || newsletter.frequency === selectedFrequency

    return matchesSearch && matchesCategory && matchesFrequency
  })

  // Sort newsletters
  const sortedNewsletters = [...filteredNewsletters].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return Number.parseFloat(b.rating.toString()) - Number.parseFloat(a.rating.toString())
      case "subscribers":
        return b.subscribers.localeCompare(a.subscribers)
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Mail className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">MailMap</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/browse" className="text-foreground font-medium">
                Browse
              </Link>
              <Link href="/submit" className="text-muted-foreground hover:text-foreground transition-colors">
                Submit
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Browse Newsletters</h1>
          <p className="text-lg text-muted-foreground">
            Discover {allNewsletters.length} curated newsletters across different categories
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search newsletters, topics, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Category:</span>
              <div className="flex space-x-1">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="h-8"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Frequency Filter */}
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Frequency:</span>
              <div className="flex space-x-1">
                {frequencies.map((frequency) => (
                  <Button
                    key={frequency}
                    variant={selectedFrequency === frequency ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFrequency(frequency)}
                    className="h-8"
                  >
                    {frequency}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Sort and View Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">{sortedNewsletters.length} newsletters found</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-foreground">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-border rounded-md px-2 py-1 bg-background text-foreground"
                >
                  <option value="popular">Most Popular</option>
                  <option value="subscribers">Most Subscribers</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-1 border border-border rounded-md p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8 w-8 p-0"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8 w-8 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Grid/List */}
        {sortedNewsletters.length === 0 ? (
          <div className="text-center py-12">
            <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No newsletters found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {sortedNewsletters.map((newsletter) => (
              <Link key={newsletter.id} href={`/newsletter/${newsletter.id}`}>
                <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 hover:border-border group h-full">
                  <CardContent className={viewMode === "grid" ? "p-6" : "p-4"}>
                    <div className={viewMode === "grid" ? "space-y-4" : "flex items-start space-x-4"}>
                      {/* Newsletter Image */}
                      <img
                        src={newsletter.image || "/placeholder.svg"}
                        alt={newsletter.name}
                        className={
                          viewMode === "grid"
                            ? "w-16 h-16 rounded-xl object-cover"
                            : "w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        }
                      />

                      <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {newsletter.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">
                            {newsletter.category}
                          </Badge>
                        </div>

                        {/* Description */}
                        <p
                          className={`text-sm text-muted-foreground mb-3 ${viewMode === "grid" ? "line-clamp-3" : "line-clamp-2"}`}
                        >
                          {newsletter.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {newsletter.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {newsletter.subscribers}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {newsletter.frequency}
                            </span>
                          </div>
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
        )}
      </div>
    </div>
  )
}
