"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Upload, X, Check, AlertCircle, ArrowLeft } from 'lucide-react'
import Link from "next/link"

const categories = ["Business", "Tech", "Design", "Marketing", "Finance", "Health", "Education", "Entertainment"]
const frequencies = ["Daily", "Weekly", "Bi-weekly", "Monthly", "Irregular"]

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    longDescription: "",
    website: "",
    category: "",
    frequency: "",
    authorName: "",
    authorEmail: "",
    submitterName: "",
    submitterEmail: "",
    sampleSubject: "",
    tags: [] as string[],
  })

  const [currentTag, setCurrentTag] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim()) && formData.tags.length < 8) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim().toLowerCase()],
      }))
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Newsletter name is required"
    if (!formData.description.trim()) newErrors.description = "Short description is required"
    if (!formData.longDescription.trim()) newErrors.longDescription = "Detailed description is required"
    if (!formData.website.trim()) newErrors.website = "Website URL is required"
    if (!formData.category) newErrors.category = "Category is required"
    if (!formData.frequency) newErrors.frequency = "Frequency is required"
    if (!formData.authorName.trim()) newErrors.authorName = "Author name is required"
    if (!formData.submitterEmail.trim()) newErrors.submitterEmail = "Your email is required"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.authorEmail && !emailRegex.test(formData.authorEmail)) {
      newErrors.authorEmail = "Please enter a valid email address"
    }
    if (formData.submitterEmail && !emailRegex.test(formData.submitterEmail)) {
      newErrors.submitterEmail = "Please enter a valid email address"
    }

    // URL validation
    try {
      new URL(formData.website)
    } catch {
      newErrors.website = "Please enter a valid URL"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Mail className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">MailMap</h1>
              </Link>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Submission Received!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for submitting <strong>{formData.name}</strong> to MailMap. We'll review your submission and
              get back to you within 2-3 business days.
            </p>
            <div className="space-y-4">
              <Link href="/browse">
                <Button size="lg">Browse Other Newsletters</Button>
              </Link>
              <div>
                <Link href="/submit">
                  <Button variant="outline" className="bg-transparent">
                    Submit Another Newsletter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <Link href="/submit" className="text-foreground font-medium">
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
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Submit a Newsletter</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help the community discover amazing newsletters by submitting your favorite or your own newsletter to our
              directory.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Newsletter Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Newsletter Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Newsletter Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="e.g., Morning Brew"
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="website">Website URL *</Label>
                        <Input
                          id="website"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          placeholder="https://newsletter-website.com"
                          className={errors.website ? "border-red-500" : ""}
                        />
                        {errors.website && <p className="text-sm text-red-500 mt-1">{errors.website}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Short Description *</Label>
                      <Input
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Brief one-line description of the newsletter"
                        className={errors.description ? "border-red-500" : ""}
                      />
                      {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
                    </div>

                    <div>
                      <Label htmlFor="longDescription">Detailed Description *</Label>
                      <Textarea
                        id="longDescription"
                        value={formData.longDescription}
                        onChange={(e) => handleInputChange("longDescription", e.target.value)}
                        placeholder="Provide a detailed description of what the newsletter covers, its unique value proposition, and what subscribers can expect..."
                        rows={4}
                        className={errors.longDescription ? "border-red-500" : ""}
                      />
                      {errors.longDescription && <p className="text-sm text-red-500 mt-1">{errors.longDescription}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <select
                          id="category"
                          value={formData.category}
                          onChange={(e) => handleInputChange("category", e.target.value)}
                          className={`w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ${
                            errors.category ? "border-red-500" : ""
                          }`}
                        >
                          <option value="">Select a category</option>
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                        {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category}</p>}
                      </div>
                      <div>
                        <Label htmlFor="frequency">Publishing Frequency *</Label>
                        <select
                          id="frequency"
                          value={formData.frequency}
                          onChange={(e) => handleInputChange("frequency", e.target.value)}
                          className={`w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ${
                            errors.frequency ? "border-red-500" : ""
                          }`}
                        >
                          <option value="">Select frequency</option>
                          {frequencies.map((frequency) => (
                            <option key={frequency} value={frequency}>
                              {frequency}
                            </option>
                          ))}
                        </select>
                        {errors.frequency && <p className="text-sm text-red-500 mt-1">{errors.frequency}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="sampleSubject">Sample Subject Line</Label>
                      <Input
                        id="sampleSubject"
                        value={formData.sampleSubject}
                        onChange={(e) => handleInputChange("sampleSubject", e.target.value)}
                        placeholder="Example subject line from a recent newsletter"
                      />
                    </div>

                    {/* Tags */}
                    <div>
                      <Label>Tags (up to 8)</Label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {formData.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                            {tag}
                            <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-500">
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          value={currentTag}
                          onChange={(e) => setCurrentTag(e.target.value)}
                          placeholder="Add a tag"
                          onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                          disabled={formData.tags.length >= 8}
                        />
                        <Button type="button" onClick={addTag} disabled={formData.tags.length >= 8} variant="outline">
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Author Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Author Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="authorName">Author Name *</Label>
                        <Input
                          id="authorName"
                          value={formData.authorName}
                          onChange={(e) => handleInputChange("authorName", e.target.value)}
                          placeholder="Newsletter author or team name"
                          className={errors.authorName ? "border-red-500" : ""}
                        />
                        {errors.authorName && <p className="text-sm text-red-500 mt-1">{errors.authorName}</p>}
                      </div>
                      <div>
                        <Label htmlFor="authorEmail">Author Email</Label>
                        <Input
                          id="authorEmail"
                          type="email"
                          value={formData.authorEmail}
                          onChange={(e) => handleInputChange("authorEmail", e.target.value)}
                          placeholder="author@newsletter.com"
                          className={errors.authorEmail ? "border-red-500" : ""}
                        />
                        {errors.authorEmail && <p className="text-sm text-red-500 mt-1">{errors.authorEmail}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Submitter Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="submitterName">Your Name</Label>
                        <Input
                          id="submitterName"
                          value={formData.submitterName}
                          onChange={(e) => handleInputChange("submitterName", e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="submitterEmail">Your Email *</Label>
                        <Input
                          id="submitterEmail"
                          type="email"
                          value={formData.submitterEmail}
                          onChange={(e) => handleInputChange("submitterEmail", e.target.value)}
                          placeholder="your@email.com"
                          className={errors.submitterEmail ? "border-red-500" : ""}
                        />
                        {errors.submitterEmail && <p className="text-sm text-red-500 mt-1">{errors.submitterEmail}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Guidelines */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Submission Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Only submit newsletters that are actively publishing and accepting new subscribers.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Provide accurate and up-to-date information about the newsletter.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        We review all submissions manually and may reach out for additional information.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Approval typically takes 2-3 business days after submission.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Card>
                  <CardContent className="p-6">
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Upload className="h-4 w-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Upload className="h-4 w-4 mr-2" />
                          Submit Newsletter
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      By submitting, you agree to our terms and confirm that you have permission to submit this
                      newsletter.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
