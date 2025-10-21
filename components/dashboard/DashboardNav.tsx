'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Экономика', href: '/dashboard', icon: '💰' },
  { name: 'Продукты', href: '/dashboard/products', icon: '📦' },
  { name: 'Персонал', href: '/dashboard/staff', icon: '👥' },
  { name: 'Проекты', href: '/dashboard/projects', icon: '📊' },
  { name: 'Имущество', href: '/dashboard/property', icon: '🏢' },
  { name: 'Маркетинг', href: '/dashboard/marketing', icon: '📈' },
  { name: 'Риски', href: '/dashboard/risks', icon: '🛡️' },
  { name: 'Календарь', href: '/dashboard/calendar', icon: '📅' },
]

export default function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
      <div className="flex flex-col h-full">
        {/* Логотип */}
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <Link href="/dashboard" className="flex items-center">
            <div className="relative">
              <div className="w-8 h-8 bg-[#2291FF] rounded-lg rotate-45 mr-3"></div>
              <div className="absolute inset-0 w-8 h-8 border-2 border-[#153177] rounded-lg rotate-45 mr-3"></div>
            </div>
            <span className="text-black font-bold text-lg">CompanyPlatform</span>
          </Link>
        </div>

        {/* Навигация */}
        <div className="flex-1 px-4 py-6">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#2291FF] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Выход */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => signOut()}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-100 transition-colors"
            title="Выйти из системы"
          >
            <span className="mr-3 text-lg">🚪</span>
            Выйти
          </button>
        </div>
      </div>
    </nav>
  )
}