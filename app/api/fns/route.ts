import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const inn = searchParams.get('inn')

  if (!inn) {
    return NextResponse.json({ error: 'ИНН не указан' }, { status: 400 })
  }

  const apiKey = process.env.FNS_API_KEY

  try {
    const response = await fetch(`https://api-fns.ru/api/egr?key=${apiKey}&req=${inn}`)
    const xmlData = await response.text()
    
    // Парсим XML ответ
    const parsedData = await parseFnsResponse(xmlData)
    
    return NextResponse.json(parsedData)
  } catch (error) {
    console.error('Ошибка ФНС API:', error)
    return NextResponse.json({ error: 'Ошибка при запросе к ФНС' }, { status: 500 })
  }
}

// Функция парсинга XML ответа от ФНС
async function parseFnsResponse(xmlData: string) {
  // Простой парсинг XML (можно использовать библиотеку xml2js)
  const extractValue = (tag: string) => {
    const match = xmlData.match(new RegExp(`<${tag}>(.*?)</${tag}>`))
    return match ? match[1] : null
  }

  const error = extractValue('ERROR')
  if (error) {
    return { error }
  }

  return {
    name: extractValue('НаимЮЛ') || extractValue('НаимИП'),
    inn: extractValue('ИНН'),
    ogrn: extractValue('ОГРН') || extractValue('ОГРНИП'),
    legalAddress: extractValue('АдресПолн'),
    registrationDate: extractValue('ДатаРег'),
    director: extractValue('ФИОРуковод') || extractValue('ФИО'),
    okved: extractValue('КодОКВЭД'),
    status: extractValue('Статус')
  }
}