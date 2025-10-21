import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { authOptions } from '@/lib/auth'

// GET - получение данных компании пользователя
export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Не авторизован' }, { status: 401 })
    }

    const company = await prisma.company.findUnique({
      where: { userId: session.user.id }
    })

    return NextResponse.json(company)
  } catch (error) {
    console.error('Failed to fetch company:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}

// POST - создание/обновление данных компании
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Не авторизован' }, { status: 401 })
    }

    const data = await request.json()

    // Проверяем, существует ли уже компания для этого пользователя
    const existingCompany = await prisma.company.findUnique({
      where: { userId: session.user.id }
    })

    let company

    if (existingCompany) {
      // Обновляем существующую компанию
      company = await prisma.company.update({
        where: { userId: session.user.id },
        data: {
          ...data,
          // Преобразуем строку даты в объект Date, если она есть
          registrationDate: data.registrationDate ? new Date(data.registrationDate) : undefined,
        }
      })
    } else {
      // Создаем новую компанию
      company = await prisma.company.create({
        data: {
          ...data,
          userId: session.user.id,
          // Преобразуем строку даты в объект Date, если она есть
          registrationDate: data.registrationDate ? new Date(data.registrationDate) : undefined,
        }
      })
    }

    return NextResponse.json(company)
  } catch (error) {
    console.error('Failed to save company:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}