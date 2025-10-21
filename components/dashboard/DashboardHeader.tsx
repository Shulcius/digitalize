// components/dashboard/DashboardHeader.tsx
'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип и название */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <div className="relative">
                <div className="w-8 h-8 bg-[#2291FF] rounded-lg rotate-45 mr-3"></div>
                <div className="absolute inset-0 w-8 h-8 border-2 border-[#153177] rounded-lg rotate-45 mr-3"></div>
              </div>
              <span className="text-black font-bold text-lg">CompanyPlatform</span>
            </Link>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              href="/dashboard" 
              className={`px-4 py-2 rounded-lg font-medium ${
                pathname === '/dashboard' 
                  ? 'bg-[#2291FF] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Главная
            </Link>
            <nav className="hidden md:flex items-center space-x-4">
              <Link 
                href="/dashboard" 
                className={`px-4 py-2 rounded-lg font-medium ${
                  pathname === '/dashboard' 
                    ? 'bg-[#2291FF] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Данные компании
              </Link>
              <Link 
                href="/dashboard/overview" 
                className={`px-4 py-2 rounded-lg font-medium ${
                  pathname === '/dashboard/overview' 
                    ? 'bg-[#2291FF] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Обзор
              </Link>
            </nav>
          </nav>

          {/* Кнопка выхода */}
          <div className="flex items-center">
            <button
              onClick={() => signOut()}
              className="bg-[#2291FF] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a7ae6] transition-colors"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}