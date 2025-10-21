export default function Ecosystem() {
  const features = [
    { name: "Финансы и экономика", icon: "💰" },
    { name: "Управление проектами", icon: "📊" },
    { name: "Персонал и HR", icon: "👥" },
    { name: "Имущество и активы", icon: "🏢" },
    { name: "Маркетинг и каналы", icon: "📈" },
    { name: "Риски и аналитика", icon: "🛡️" }
  ]

  return (
    <section id="ecosystem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Экосистема для бизнеса
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Все необходимые инструменты в одном приложении
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card group hover:transform hover:scale-105 transition-all duration-300 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.name}</h3>
              <p className="text-gray-600">Полный цикл управления бизнес-процессами</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}