"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  Search,
  Filter,
  Eye,
  Check,
  X,
  Edit,
  Users,
  TrendingUp,
  Clock,
  AlertCircle,
  MoreHorizontal,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const pendingSubmissions = [
  {
    id: 1,
    name: "AI Weekly Digest",
    description: "Weekly roundup of AI news and developments",
    category: "Tech",
    frequency: "Weekly",
    submitterEmail: "john@example.com",
    submittedAt: "2025-01-15",
    status: "pending",
    website: "https://aiweekly.com",
  },
  {
    id: 2,
    name: "Marketing Mastery",
    description: "Advanced marketing strategies and case studies",
    category: "Marketing",
    frequency: "Bi-weekly",
    submitterEmail: "sarah@marketing.com",
    submittedAt: "2025-01-14",
    status: "pending",
    website: "https://marketingmastery.io",
  },
  {
    id: 3,
    name: "Design Trends 2025",
    description: "Latest design trends and inspiration",
    category: "Design",
    frequency: "Monthly",
    submitterEmail: "alex@design.co",
    submittedAt: "2025-01-13",
    status: "pending",
    website: "https://designtrends2025.com",
  },
]

const publishedNewsletters = [
  {
    id: 1,
    name: "Morning Brew",
    category: "Business",
    subscribers: "4M+",
    rating: 4.8,
    status: "published",
    publishedAt: "2024-12-01",
  },
  {
    id: 2,
    name: "The Hustle",
    category: "Tech",
    subscribers: "2M+",
    rating: 4.7,
    status: "published",
    publishedAt: "2024-11-15",
  },
  {
    id: 3,
    name: "Dense Discovery",
    category: "Design",
    subscribers: "50K+",
    rating: 4.9,
    status: "published",
    publishedAt: "2024-10-20",
  },
]

const analyticsData = {
  totalNewsletters: 156,
  pendingReviews: 8,
  totalSubscribers: "12.5M+",
  avgRating: 4.6,
  monthlyGrowth: 12,
  categoriesCount: {
    Business: 45,
    Tech: 38,
    Design: 28,
    Marketing: 25,
    Finance: 20,
  },
}

export default function AdminDashboardContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const router = useRouter()

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userRole")
    router.push("/")
  }

  const handleApprove = (id: number) => {
    console.log(`Approving submission ${id}`)
    // Handle approval logic
  }

  const handleReject = (id: number) => {
    console.log(`Rejecting submission ${id}`)
    // Handle rejection logic
  }

  const handleEdit = (id: number) => {
    console.log(`Editing newsletter ${id}`)
    // Handle edit logic
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Mail className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">MailMap Admin</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                View Site
              </Link>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage newsletter submissions and directory content</p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Newsletters</p>
                  <p className="text-2xl font-bold text-foreground">{analyticsData.totalNewsletters}</p>
                </div>
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Reviews</p>
                  <p className="text-2xl font-bold text-foreground">{analyticsData.pendingReviews}</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Subscribers</p>
                  <p className="text-2xl font-bold text-foreground">{analyticsData.totalSubscribers}</p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Growth</p>
                  <p className="text-2xl font-bold text-foreground">+{analyticsData.monthlyGrowth}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending" className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4" />
              <span>Pending Reviews ({pendingSubmissions.length})</span>
            </TabsTrigger>
            <TabsTrigger value="published" className="flex items-center space-x-2">
              <Check className="h-4 w-4" />
              <span>Published ({publishedNewsletters.length})</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* Pending Reviews Tab */}
          <TabsContent value="pending" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Pending Submissions</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search submissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {pendingSubmissions.map((submission) => (
                <Card key={submission.id} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{submission.name}</h3>
                          <Badge variant="secondary">{submission.category}</Badge>
                          <Badge variant="outline" className="text-xs">
                            {submission.frequency}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{submission.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Submitted by: {submission.submitterEmail}</span>
                          <span>•</span>
                          <span>Date: {submission.submittedAt}</span>
                          <span>•</span>
                          <Link
                            href={submission.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            View Website
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Review
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handleApprove(submission.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Check className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => handleReject(submission.id)}>
                          <X className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Published Newsletters Tab */}
          <TabsContent value="published" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Published Newsletters</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search newsletters..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {publishedNewsletters.map((newsletter) => (
                <Card key={newsletter.id} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{newsletter.name}</h3>
                          <Badge variant="secondary">{newsletter.category}</Badge>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Published
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {newsletter.subscribers} subscribers
                          </span>
                          <span>•</span>
                          <span>Rating: {newsletter.rating}/5</span>
                          <span>•</span>
                          <span>Published: {newsletter.publishedAt}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/newsletter/${newsletter.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleEdit(newsletter.id)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Analytics Overview</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Category Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Newsletters by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(analyticsData.categoriesCount).map(([category, count]) => (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{category}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{
                                width: `${(count / Math.max(...Object.values(analyticsData.categoriesCount))) * 100}%`,
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium text-foreground w-8 text-right">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-muted-foreground">"AI Weekly Digest" submitted for review</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm text-muted-foreground">"Morning Brew" rating updated to 4.8</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="text-sm text-muted-foreground">"Design Trends 2025" pending review</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-muted-foreground">"Tech Insider" approved and published</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{analyticsData.avgRating}</p>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">94%</p>
                    <p className="text-sm text-muted-foreground">Approval Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">2.3</p>
                    <p className="text-sm text-muted-foreground">Avg Review Time (days)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">156</p>
                    <p className="text-sm text-muted-foreground">Active Newsletters</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
