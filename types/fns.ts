// types/fns.ts
export interface FNSCompany {
  ИНН: string;
  ОГРН: string;
  НаимСокрЮЛ?: string;
  НаимПолнЮЛ?: string;
  ФИОПолн?: string;
  Статус: string;
  АдресПолн: string;
  ОснВидДеят: string;
}

export interface FNSResponse {
  items: FNSCompany[];
  Count: number;
  [key: string]: any;
}