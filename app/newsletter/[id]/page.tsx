import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Users, Star, Clock, ExternalLink, Calendar, Globe, ArrowLeft, Heart, Share2, Flag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data for newsletters
const newsletters = {
  "1": {
    id: 1,
    name: "Morning Brew",
    description: "Business news that doesn't put you to sleep",
    longDescription:
      "Morning Brew delivers quick and insightful updates about the business world every day of the week. From Wall Street to Silicon Valley, we know that you want to know what happened overnight, and our team of writers and editors make sure that you're updated on the most important news in business.",
    category: "Business",
    subscribers: "4M+",
    rating: 4.8,
    reviewCount: 1247,
    frequency: "Daily",
    founded: "2015",
    website: "https://morningbrew.com",
    image: "/morning-brew-business-newsletter-logo.jpg",
    tags: ["business", "finance", "tech", "wall street", "startups"],
    author: "Morning Brew Team",
    authorImage: "/morning-brew-team.jpg",
    sampleSubject: "Tesla's big week, Netflix's password crackdown, and more",
    features: [
      "Daily business news digest",
      "Market updates and analysis",
      "Tech industry insights",
      "Startup funding rounds",
      "Economic indicators",
    ],
    pros: [
      "Concise and easy to read",
      "Great for staying updated on business news",
      "Engaging writing style",
      "Consistent daily delivery",
    ],
    cons: ["Can be US-focused", "Limited deep analysis", "Sometimes promotional content"],
  },
  "2": {
    id: 2,
    name: "The Hustle",
    description: "Tech and business news with personality",
    longDescription:
      "The Hustle is a daily email newsletter that delivers the most important business and tech news in 5 minutes or less. We write like humans, for humans, and we're not afraid to have a little fun while we're at it.",
    category: "Tech",
    subscribers: "2M+",
    rating: 4.7,
    reviewCount: 892,
    frequency: "Daily",
    founded: "2016",
    website: "https://thehustle.co",
    image: "/the-hustle-tech-newsletter-logo.jpg",
    tags: ["tech", "business", "startup", "entrepreneurship", "innovation"],
    author: "The Hustle Team",
    authorImage: "/hustle-team.jpg",
    sampleSubject: "Why everyone's talking about AI agents",
    features: [
      "Daily tech and business news",
      "Startup stories and insights",
      "Trend analysis",
      "Entrepreneurship tips",
      "Industry deep dives",
    ],
    pros: ["Entertaining writing style", "Good mix of news and analysis", "Strong startup focus", "Quick daily read"],
    cons: ["Can be too casual for some", "Limited international coverage", "Occasional clickbait headlines"],
  },
}

// Mock reviews data
const reviews = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "/reviewer-1.jpg",
    rating: 5,
    date: "2 weeks ago",
    content:
      "Absolutely love Morning Brew! It's become part of my daily routine. The writing is engaging and I feel informed about business news without being overwhelmed.",
  },
  {
    id: 2,
    author: "Mike Rodriguez",
    avatar: "/reviewer-2.jpg",
    rating: 4,
    date: "1 month ago",
    content:
      "Great newsletter for staying up to date with business news. Sometimes wish they had more international coverage, but overall very solid.",
  },
  {
    id: 3,
    author: "Emily Johnson",
    avatar: "/reviewer-3.jpg",
    rating: 5,
    date: "2 months ago",
    content:
      "Perfect length and tone. I actually look forward to reading it every morning with my coffee. Highly recommend!",
  },
]

export default function NewsletterDetailPage({ params }: { params: { id: string } }) {
  const newsletter = newsletters[params.id as keyof typeof newsletters]

  if (!newsletter) {
    notFound()
  }

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
              <Link href="/browse" className="text-muted-foreground hover:text-foreground transition-colors">
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
        {/* Back Button */}
        <Link
          href="/browse"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Browse
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Newsletter Header */}
            <div className="flex items-start space-x-6">
              <img
                src={newsletter.image || "/placeholder.svg"}
                alt={newsletter.name}
                className="w-24 h-24 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{newsletter.name}</h1>
                    <p className="text-lg text-muted-foreground mb-3">{newsletter.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {newsletter.subscribers} subscribers
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {newsletter.frequency}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Since {newsletter.founded}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {newsletter.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(newsletter.rating) ? "fill-current text-yellow-500" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{newsletter.rating}</span>
                  <span className="text-muted-foreground">({newsletter.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About {newsletter.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{newsletter.longDescription}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">What you'll get:</h4>
                  <ul className="space-y-1">
                    {newsletter.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pros:</h4>
                    <ul className="space-y-1">
                      {newsletter.pros.map((pro, index) => (
                        <li key={index} className="text-muted-foreground text-sm flex items-center">
                          <span className="w-1 h-1 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cons:</h4>
                    <ul className="space-y-1">
                      {newsletter.cons.map((con, index) => (
                        <li key={index} className="text-muted-foreground text-sm flex items-center">
                          <span className="w-1 h-1 bg-orange-500 rounded-full mr-2 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({newsletter.reviewCount})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-border/40 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                        <AvatarFallback>
                          {review.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h5 className="font-semibold text-foreground">{review.author}</h5>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < review.rating ? "fill-current text-yellow-500" : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.content}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full bg-transparent">
                  Load More Reviews
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subscribe Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Badge className="mb-2">{newsletter.category}</Badge>
                  <h3 className="text-xl font-bold text-foreground">Subscribe to {newsletter.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Join {newsletter.subscribers} subscribers getting {newsletter.frequency.toLowerCase()} updates
                  </p>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Mail className="h-4 w-4 mr-2" />
                      Subscribe Now
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href={newsletter.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </Link>
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground mb-2">Sample subject line:</p>
                    <p className="text-sm font-medium text-foreground italic">"{newsletter.sampleSubject}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Author Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About the Author</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-3">
                  <Avatar>
                    <AvatarImage src={newsletter.authorImage || "/placeholder.svg"} alt={newsletter.author} />
                    <AvatarFallback>
                      {newsletter.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{newsletter.author}</h4>
                    <p className="text-sm text-muted-foreground">Newsletter Creator</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Globe className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subscribers</span>
                  <span className="font-semibold text-foreground">{newsletter.subscribers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frequency</span>
                  <span className="font-semibold text-foreground">{newsletter.frequency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Founded</span>
                  <span className="font-semibold text-foreground">{newsletter.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-semibold text-foreground">{newsletter.rating}/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
