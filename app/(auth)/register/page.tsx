'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        router.push('/login?message=Registration successful')
      } else {
        const data = await response.json()
        setError(data.error || 'Ошибка регистрации')
      }
    } catch {
      // Убрана переменная err, так как она не используется
      setError('Ошибка сети')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-12 h-12 bg-[#2291FF] rounded-xl rotate-45"></div>
              <div className="absolute inset-0 w-12 h-12 border-2 border-[#153177] rounded-xl rotate-45"></div>
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Регистрация
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <input
                name="name"
                type="text"
                required
                className="glass-card w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#2291FF] focus:border-[#2291FF]"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                required
                className="glass-card w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#2291FF] focus:border-[#2291FF]"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="company"
                type="text"
                required
                className="glass-card w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#2291FF] focus:border-[#2291FF]"
                placeholder="Название компании"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                required
                className="glass-card w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#2291FF] focus:border-[#2291FF]"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#2291FF] hover:bg-[#1a7ae6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2291FF]"
            >
              Зарегистрироваться
            </button>
          </div>

          <div className="text-center">
            <Link
              href="/login"
              className="text-[#2291FF] hover:text-[#153177] font-medium"
            >
              Уже есть аккаунт? Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}