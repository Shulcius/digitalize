import Link from 'next/link'

const steps = [
  {
    title: "📋 Выбор формы собственности",
    description: "ООО, ИП или АО? Поможем выбрать оптимальный вариант",
    tasks: ["Сравнение налогов", "Ответственность", "Процедура регистрации"]
  },
  {
    title: "📝 Подготовка документов",
    description: "Сформируем все необходимые документы автоматически",
    tasks: ["Устав", "Заявление", "Протокол собрания"]
  },
  {
    title: "💳 Открытие расчетного счета",
    description: "Поможем выбрать банк и откроем счет",
    tasks: ["Выбор банка", "Пакет документов", "Онлайн-заявка"]
  },
  {
    title: "🏢 Регистрация в гос.органах",
    description: "Подача документов в ФНС и внебюджетные фонды",
    tasks: ["ФНС", "ПФР", "ФСС", "Росстат"]
  }
]

export default function NewCompany() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Открытие новой компании</h1>
          <p className="text-xl text-gray-600">
            Пошаговый процесс регистрации вашего бизнеса
          </p>
        </div>
        <Link 
          href="/dashboard" 
          className="bg-[#2291FF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a7ae6] transition-colors"
        >
          ← Назад к данным
        </Link>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="glass-card">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#2291FF] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {step.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#2291FF] rounded-full mr-3"></div>
                      {task}
                    </div>
                  ))}
                </div>
                
                {index === 0 && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-medium text-blue-800 mb-2">Рекомендуем начать с:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button className="bg-white border border-blue-200 text-blue-700 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                        🏢 ООО
                      </button>
                      <button className="bg-white border border-blue-200 text-blue-700 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                        👤 ИП
                      </button>
                      <button className="bg-white border border-blue-200 text-blue-700 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                        📊 АО
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 glass-card text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Готовы начать?</h3>
        <p className="text-gray-600 mb-6">Мы сопровождаем вас на каждом этапе регистрации</p>
        <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-700 transition-colors text-lg">
          🚀 Начать процесс регистрации
        </button>
      </div>
    </div>
  )
}