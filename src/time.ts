export function formatYearDate(date:  number | string | Date, locale: string = "en-US"): string {
  const today = new Date(date);
  return new Intl.DateTimeFormat(locale).format(today);
}

export function leftPad2(digit: number) {
	return digit >= 10 ? `${digit}` : `0${digit}`
}

export function formatHHMMSS(text: number | string) {
	const digit = Number(text)
	if (!Number.isNaN(digit) && digit >= 0) {
		const ss = digit % 60
		const mm = Math.floor(digit / 60) % 60
		const hh = Math.floor(digit / 3600)
		const base = `${leftPad2(mm)}:${leftPad2(ss)}`
		if (hh > 0) {
			return `${hh}:${base}`
		}
		return base
	}
	return ''
}

