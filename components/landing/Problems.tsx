export default function Problems() {
  const problems = [
    {
      title: "Разрозненные системы",
      description: "Учет в Excel, финансы в 1С, проекты в Trello - данные теряются и дублируются"
    },
    {
      title: "Сложность масштабирования",
      description: "Нет единой системы для компаний от 1 до 100+ сотрудников"
    },
    {
      title: "Высокие затраты",
      description: "Дорогие корпоративные решения не по карману малому и среднему бизнесу"
    },
    {
      title: "Юридические сложности",
      description: "Отсутствие адаптации под российское законодательство и ООО"
    }
  ]

  return (
    <section id="problems" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#2291FF] rounded-3xl p-10 mx-2">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Какие проблемы мы решаем?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Для российских ООО численностью от 1 до 100+ человек
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="glass-card group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-[#ff2922] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{problem.title}</h3>
                </div>
                <p className="text-gray-600 ml-12">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}