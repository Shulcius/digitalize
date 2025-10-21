export default function Roadmap() {
  const milestones = [
    { phase: "10.2025 - 02.2026", items: ["Система аутентификации", "Основная страница компании", "Заполнение входных параметров"] },
    { phase: "03.2026 - 05.2026", items: ["Модули: Персонал, Экономика, Отчётность, Продукт"] },
    { phase: "06.2026 - 10.2026", items: ["Расширенная отчетность", "ИИ-функионал"] },
    { phase: "12.2026 - 02.2027", items: ["Найм персонала", "Реклама, SEO и CMM", "Продуктовая аналитика"] }
  ]

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Дорожная карта разработки
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            План развития платформы
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#2291FF] opacity-20"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1">
                  <div className={`glass-card max-w-md ${index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'}`}>
                    <h3 className="text-2xl font-bold text-[#2291FF] mb-4">{milestone.phase}</h3>
                    <ul className="space-y-2">
                      {milestone.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-[#2291FF] rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2291FF] rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}