import AuthGuard from "@/components/auth-guard"
import AdminDashboardContent from "./dashboard-content"

export default function AdminPage() {
  return (
    <AuthGuard requireAuth requireAdmin>
      <AdminDashboardContent />
    </AuthGuard>
  )
}
