'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

interface CompanyForm {
  // Пользовательские поля
  name: string
  inn: string
  industry: string
  size: string
  website: string
  
  // Автоматические поля из ФНС
  ogrn?: string
  legalAddress?: string
  registrationDate?: string
  director?: string
  okved?: string
  status?: string
  
  // Подтверждение
  isConfirmed: boolean
}

export default function CompanyDashboard() {
  const [company, setCompany] = useState<CompanyForm | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [loadingFns, setLoadingFns] = useState(false)
  const [fnsData, setFnsData] = useState<any>(null)
  const [fnsError, setFnsError] = useState<string | null>(null)
  
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<CompanyForm>()

  const innValue = watch('inn')

  // Загрузка данных компании
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await fetch('/api/company')
        if (response.ok) {
          const companyData = await response.json()
          setCompany(companyData)
          reset(companyData)
        }
      } catch (error) {
        console.error('Ошибка загрузки данных компании:', error)
      }
    }
    fetchCompany()
  }, [reset])

  // Автозагрузка данных по ИНН
  useEffect(() => {
    if (innValue && innValue.length === 10) {
      fetchFnsData(innValue)
    }
  }, [innValue])

  const fetchFnsData = async (inn: string) => {
    setLoadingFns(true)
    setFnsError(null)
    try {
      const response = await fetch(`/api/fns?inn=${inn}`)
      const data = await response.json()

      if (data.error) {
        if (data.error.includes('не зарегистрирован')) {
          setFnsError('Компания с таким ИНН не найдена. Вы можете создать новую компанию.')
        } else {
          setFnsError(data.error)
        }
        setFnsData(null)
      } else {
        setFnsData(data)
        // Автозаполняем поля из ФНС
        setValue('name', data.name || '')
        setValue('ogrn', data.ogrn || '')
        setValue('legalAddress', data.legalAddress || '')
        setValue('director', data.director || '')
        setValue('okved', data.okved || '')
        setValue('status', data.status || '')
        setValue('isConfirmed', false)
      }
    } catch (error) {
      setFnsError('Ошибка при загрузке данных из ФНС')
    } finally {
      setLoadingFns(false)
    }
  }

  const onSubmit = async (data: CompanyForm) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/company', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 3000)
        const updatedCompany = await response.json()
        setCompany(updatedCompany)
      }
    } catch (error) {
      console.error('Ошибка сохранения:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleConfirmData = () => {
    setValue('isConfirmed', true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Данные компании</h1>
          <p className="text-xl text-gray-600">
            {company ? 'Редактируйте информацию о вашей компании' : 'Заполните информацию о вашей компании'}
          </p>
        </div>
        <Link 
          href="/dashboard/overview" 
          className="bg-[#2291FF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a7ae6] transition-colors"
        >
          📊 Обзор dashboard
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Основные поля */}
        <div className="glass-card">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Основная информация</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ИНН *
              </label>
              <input
                type="text"
                {...register('inn', { 
                  required: 'Обязательное поле',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'ИНН должен содержать 10 цифр'
                  }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#2291FF] focus:border-[#2291FF] glass"
                placeholder="Введите ИНН компании"
              />
              {errors.inn && <p className="text-red-500 text-sm mt-1">{errors.inn.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Название компании *
              </label>
              <input
                type="text"
                {...register('name', { required: 'Обязательное поле' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#2291FF] focus:border-[#2291FF] glass"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Отрасль
              </label>
              <input
                type="text"
                {...register('industry')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#2291FF] focus:border-[#2291FF] glass"
                placeholder="IT, Retail, Manufacturing..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Количество сотрудников
              </label>
              <select
                {...register('size')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#2291FF] focus:border-[#2291FF] glass"
              >
                <option value="">Выберите количество</option>
                <option value="1-10">1-10 сотрудников</option>
                <option value="11-50">11-50 сотрудников</option>
                <option value="51-200">51-200 сотрудников</option>
                <option value="201-500">201-500 сотрудников</option>
                <option value="500+">Более 500 сотрудников</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Веб-сайт
              </label>
              <input
                type="url"
                {...register('website')}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#2291FF] focus:border-[#2291FF] glass"
                placeholder="https://example.com"
              />
            </div>
          </div>
        </div>

        {/* Данные из ФНС */}
        {loadingFns && (
          <div className="glass-card bg-blue-50">
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2291FF] mx-auto"></div>
              <p className="mt-2 text-gray-600">Загружаем данные из ФНС...</p>
            </div>
          </div>
        )}

        {fnsError && (
          <div className="glass-card bg-yellow-50 border border-yellow-200">
            <div className="flex items-start">
              <div className="text-yellow-600 mr-3">⚠️</div>
              <div>
                <h3 className="font-medium text-yellow-800">Внимание</h3>
                <p className="text-yellow-700 mt-1">{fnsError}</p>
                {fnsError.includes('не найдена') && (
                  <div className="mt-4 space-y-3">
                    <p className="text-sm">Хотите открыть новую компанию?</p>
                    <Link 
                      href="/dashboard/new-company" 
                      className="inline-block bg-[#2291FF] text-white px-6 py-2 rounded-lg hover:bg-[#1a7ae6] transition-colors"
                    >
                      🚀 Начать процесс открытия
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {fnsData && !fnsError && (
          <div className="glass-card bg-green-50 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Данные из ФНС</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ОГРН</label>
                <input
                  type="text"
                  {...register('ogrn')}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-300"
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Юридический адрес</label>
                <input
                  type="text"
                  {...register('legalAddress')}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-300"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Руководитель</label>
                <input
                  type="text"
                  {...register('director')}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-300"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ОКВЭД</label>
                <input
                  type="text"
                  {...register('okved')}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-300"
                  readOnly
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                {...register('isConfirmed')}
                className="w-4 h-4 text-[#2291FF] rounded focus:ring-[#2291FF]"
              />
              <label className="text-sm text-gray-700">
                Подтверждаю, что данные из ФНС корректны
              </label>
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#2291FF] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#1a7ae6] transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Сохранение...' : 'Сохранить данные компании'}
          </button>
        </div>

        {isSaved && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
            ✅ Данные успешно сохранены!
          </div>
        )}
      </form>
    </div>
  )
}