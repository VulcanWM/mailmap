import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <Mail className="h-16 w-16 text-muted-foreground mx-auto" />
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Newsletter Not Found</h1>
          <p className="text-muted-foreground">
            The newsletter you're looking for doesn't exist or may have been removed.
          </p>
        </div>
        <div className="space-y-3">
          <Link href="/browse">
            <Button className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Browse All Newsletters
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full bg-transparent">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
