'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useScroll } from '@/hooks/useScroll'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = useScroll()

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/40 backdrop-blur-md border-b border-white/20 rounded-b-2xl mx-2 mt-2' 
        : 'bg-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative">
                <div className="w-10 h-10 bg-[#2291FF] rounded-xl rotate-45 mr-3"></div>
                <div className="absolute inset-0 w-10 h-10 border-2 border-[#153177] rounded-xl rotate-45 mr-3"></div>
              </div>
              <span className="text-black font-bold text-xl">CompanyPlatform</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#problems" className="text-gray-700 hover:text-[#2291FF] transition-colors font-medium">
              Проблемы
            </Link>
            <Link href="#ecosystem" className="text-gray-700 hover:text-[#2291FF] transition-colors font-medium">
              Экосистема
            </Link>
            <Link href="#offers" className="text-gray-700 hover:text-[#2291FF] transition-colors font-medium">
              Акции
            </Link>
            <Link href="#roadmap" className="text-gray-700 hover:text-[#2291FF] transition-colors font-medium">
              Развитие
            </Link>
            <div className="flex space-x-4">
              <Link 
                href="/login" 
                className="text-gray-700 hover:text-[#2291FF] transition-colors px-4 py-2 font-medium"
              >
                Вход
              </Link>
              <Link 
                href="/register" 
                className="bg-[#2291FF] text-white px-6 py-2 rounded-xl hover:bg-[#1a7ae6] transition-colors font-semibold shadow-lg"
              >
                Регистрация
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#2291FF]"
              title="Открыть меню" // Добавлено
              aria-label="Открыть меню" // Добавлено для скринридеров
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-gray-200 mt-2 rounded-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#problems" className="block text-gray-700 hover:text-[#2291FF] px-3 py-2 rounded-lg hover:bg-blue-50">
                Проблемы
              </Link>
              <Link href="#ecosystem" className="block text-gray-700 hover:text-[#2291FF] px-3 py-2 rounded-lg hover:bg-blue-50">
                Экосистема
              </Link>
              <Link href="#offers" className="block text-gray-700 hover:text-[#2291FF] px-3 py-2 rounded-lg hover:bg-blue-50">
                Акции
              </Link>
              <Link href="#roadmap" className="block text-gray-700 hover:text-[#2291FF] px-3 py-2 rounded-lg hover:bg-blue-50">
                Развитие
              </Link>
              <Link href="/login" className="block text-gray-700 hover:text-[#2291FF] px-3 py-2 rounded-lg hover:bg-blue-50">
                Вход
              </Link>
              <Link href="/register" className="block text-gray-700 hover:text-[#2291FF] px-3 py-2 rounded-lg hover:bg-blue-50">
                Регистрация
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}