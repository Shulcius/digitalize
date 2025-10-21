import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import { authOptions } from '@/lib/auth'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // ВРЕМЕННО оставляем без проверки сессии
  // const session = await getServerSession(authOptions)
  // if (!session) {
  //   redirect('/login')
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="p-8">
        {children}
      </main>
    </div>
  )
}