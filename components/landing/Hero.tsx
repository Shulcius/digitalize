import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* <div className="absolute top-1/4 -left-10 w-64 h-64 bg-[#2291FF] opacity-5 rounded-full animate-float"></div> */}
      <div className="floating-shape shape-primary top-1/4 -left-10 w-64 h-64"></div>
      <div className="absolute top-1/3 -right-10 w-80 h-80 bg-[#153177] opacity-5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Управляйте
            <span className="block text-[#2291FF] mt-2">
              Бизнесом
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Единая платформа для российских ООО от 1 до 100+ сотрудников
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Link 
              href="/register" 
              className="bg-[#2291FF] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#1a7ae6] transition-all transform hover:scale-105 shadow-lg"
            >
              Начать бесплатно
            </Link>
            <Link 
              href="#problems" 
              className="glass-card text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white transition-all border border-gray-200 hover:border-[#2291FF] hover:text-[#2291FF]"
            >
              Узнать о проблемах
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}