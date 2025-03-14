export function formatYearDate(date:  number | string | Date, locale: string = "en-US"): string {
  const today = new Date(date);
  return new Intl.DateTimeFormat(locale).format(today);
}
