import Link from 'next/link'

export default function Offers() {
  return (
    <section id="offers" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Акции и предложения
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card border-2 border-[#2291FF] relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#2291FF] text-white px-3 py-1 rounded-full text-sm font-semibold">
              Для начала
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Стартап</h3>
            <div className="text-4xl font-bold text-[#2291FF] mb-4">Бесплатно</div>
            <p className="text-gray-600 mb-6">Для соло фаундеров</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">✓ Три основных модуля</li>
              <li className="flex items-center text-gray-700">✓ 1 сотрудник</li>
              <li className="flex items-center text-gray-700">✓ Ты познакомишься с платформой</li>
            </ul>
            <Link href="/register" className="block w-full bg-[#2291FF] text-white text-center py-3 rounded-xl font-semibold hover:bg-[#1a7ae6] transition-colors">
              Попробовать за 14 дней
            </Link>
          </div>

          <div className="glass-card relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#153177] text-white px-3 py-1 rounded-full text-sm font-semibold">
              Легко
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Стартер</h3>
            <div className="text-4xl font-bold text-[#2291FF] mb-4">1990₽<span className="text-lg text-gray-600">/месяц</span></div>
            <p className="text-gray-600 mb-6">Для компаний до 3 человек</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">✓ Все модули без ИИ</li>
              <li className="flex items-center text-gray-700">✓ 3 сотрудника вместе с тобой</li>
              <li className="flex items-center text-gray-700">✓ Низкий приоритет поддержки</li>
            </ul>
            <Link href="/register" className="block w-full bg-[#153177] text-white text-center py-3 rounded-xl font-semibold hover:bg-[#0f255e] transition-colors">
              Месяц в подарок*
            </Link>
          </div>

          <div className="glass-card border-2 border-[#2291FF] relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#2291FF] text-white px-3 py-1 rounded-full text-sm font-semibold">
              Средне
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Мы команда</h3>
            <div className="text-4xl font-bold text-[#2291FF] mb-4">2550₽</div>
            <p className="text-gray-600 mb-6">Для компаний от 4 до 10 человек</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">✓ Все модули и ИИ-поддержка внутри</li>
              <li className="flex items-center text-gray-700">✓ до 10 сотрудников</li>
              <li className="flex items-center text-gray-700">✓ Средний приоритет поддержки</li>
            </ul>
            <Link href="/register" className="block w-full bg-[#2291FF] text-white text-center py-3 rounded-xl font-semibold hover:bg-[#1a7ae6] transition-colors">
              Два месяца по цене одного!*
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}