import Link from 'next/link'

const dashboardSections = [
  {
    title: '📊 Экономика компании',
    description: 'Управление финансами, доходами и расходами',
    href: '/dashboard',
    color: 'bg-blue-500'
  },
  {
    title: '📦 Продукты компании',
    description: 'Управление продуктами и услугами',
    href: '/dashboard/products',
    color: 'bg-green-500'
  },
  {
    title: '👥 Персонал компании',
    description: 'Управление сотрудниками и HR',
    href: '/dashboard/staff', 
    color: 'bg-purple-500'
  },
  {
    title: '🚀 Проекты компании',
    description: 'Управление проектами и задачами',
    href: '/dashboard/projects',
    color: 'bg-orange-500'
  },
  {
    title: '🏢 Имущество компании',
    description: 'Учет активов и имущества',
    href: '/dashboard/property',
    color: 'bg-red-500'
  },
  {
    title: '📈 Маркетинг и каналы',
    description: 'Управление маркетингом и продажами',
    href: '/dashboard/marketing',
    color: 'bg-pink-500'
  },
  {
    title: '🛡️ Риски компании',
    description: 'Анализ и управление рисками',
    href: '/dashboard/risks',
    color: 'bg-yellow-500'
  },
  {
    title: '📅 Календарь',
    description: 'Планирование и события',
    href: '/dashboard/calendar',
    color: 'bg-indigo-500'
  }
]

export default function Overview() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Панель управления компанией
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Управляйте всеми аспектами вашего бизнеса в одном месте
        </p>
      </div>

      {/* Сетка кнопок-разделов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dashboardSections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group block"
          >
            <div className="glass-card h-full group-hover:transform group-hover:scale-105 transition-all duration-300 border-2 border-transparent group-hover:border-[#2291FF]">
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl ${section.color} mr-4`}>
                  {section.title.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {section.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[#2291FF] text-sm font-medium">
                  Перейти →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}