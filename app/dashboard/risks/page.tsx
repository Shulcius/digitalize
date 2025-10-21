import Link from 'next/link'

export default function Risks() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Риски компании</h1>
          <p className="text-gray-600 mt-2">Мониторинг, анализ и управление бизнес-рисками</p>
        </div>
        <Link 
          href="/dashboard" 
          className="bg-[#2291FF] text-white px-4 py-2 rounded-lg hover:bg-[#1a7ae6] transition-colors"
        >
          ← На главную
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="glass-card text-center">
          <div className="text-3xl font-bold text-red-500 mb-2">0</div>
          <div className="text-gray-600">Критические риски</div>
        </div>
        <div className="glass-card text-center">
          <div className="text-3xl font-bold text-yellow-500 mb-2">0</div>
          <div className="text-gray-600">Высокие риски</div>
        </div>
        <div className="glass-card text-center">
          <div className="text-3xl font-bold text-green-500 mb-2">0</div>
          <div className="text-gray-600">Низкие риски</div>
        </div>
      </div>

      <div className="glass-card">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛡️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Система управления рисками</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Проактивное выявление и минимизация потенциальных угроз бизнесу
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto text-sm text-gray-500 text-left">
            <div>• Финансовые риски</div>
            <div>• Операционные риски</div>
            <div>• Юридические риски</div>
            <div>• Рыночные риски</div>
          </div>
        </div>
      </div>
    </div>
  )
}