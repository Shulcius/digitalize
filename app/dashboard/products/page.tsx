import Link from 'next/link'

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Продукты компании</h1>
          <p className="text-gray-600 mt-2">Управление продуктами и услугами вашей компании</p>
        </div>
        <Link 
          href="/dashboard" 
          className="bg-[#2291FF] text-white px-4 py-2 rounded-lg hover:bg-[#1a7ae6] transition-colors"
        >
          ← На главную
        </Link>
      </div>

      <div className="glass-card">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Раздел в разработке</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Функциональность управления продуктами будет доступна в ближайшем обновлении
          </p>
        </div>
      </div>
    </div>
  )
}