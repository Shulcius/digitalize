import Link from 'next/link'

export default function Staff() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Персонал компании</h1>
          <p className="text-gray-600 mt-2">Управление сотрудниками, должностями и HR-процессами</p>
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
          <div className="text-3xl font-bold text-[#2291FF] mb-2">0</div>
          <div className="text-gray-600">Всего сотрудников</div>
        </div>
        <div className="glass-card text-center">
          <div className="text-3xl font-bold text-green-500 mb-2">0</div>
          <div className="text-gray-600">Активных</div>
        </div>
        <div className="glass-card text-center">
          <div className="text-3xl font-bold text-blue-500 mb-2">0</div>
          <div className="text-gray-600">Отделов</div>
        </div>
      </div>

      <div className="glass-card">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">👥</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Раздел в разработке</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Функциональность управления персоналом будет доступна в ближайшем обновлении
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto text-sm text-gray-500 text-left">
            <div>• Учет сотрудников</div>
            <div>• График отпусков</div>
            <div>• Расчет зарплат</div>
            <div>• KPI и показатели</div>
          </div>
        </div>
      </div>
    </div>
  )
}