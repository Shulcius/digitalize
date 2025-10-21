// app/api/company/search/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const filter = searchParams.get('filter');

  if (!query) {
    return NextResponse.json(
      { error: 'Не указана поисковая строка (параметр q)' },
      { status: 400 }
    );
  }

  const apiKey = process.env.FNS_API_KEY;
  if (!apiKey) {
    console.error('FNS_API_KEY не настроен');
    return NextResponse.json(
      { error: 'Сервис поиска временно недоступен' },
      { status: 500 }
    );
  }

  const apiUrl = new URL('https://api-fns.ru/api/search');
  apiUrl.searchParams.append('q', query);
  apiUrl.searchParams.append('key', apiKey);

  if (filter) {
    apiUrl.searchParams.append('filter', filter);
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const response = await fetch(apiUrl.toString(), {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`ФНС API error ${response.status}:`, errorText);
      
      if (response.status === 429) {
        return NextResponse.json(
          { error: 'Превышен лимит запросов. Попробуйте позже.' },
          { status: 429 }
        );
      }
      
      throw new Error(`Ошибка ФНС API: ${response.status}`);
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ 
        message: 'Компании не найдены',
        items: [] 
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Ошибка при поиске компаний:', error);
    
    if (error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Таймаут запроса к сервису поиска' },
        { status: 504 }
      );
    }
    
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера при поиске компаний' },
      { status: 500 }
    );
  }
}