export function shuffleArray<T = any>(arr: T[], outputLength?: number): T[] {
  const array = [...arr]
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  if (outputLength) {
    return array.slice(0, outputLength);
  }
  return array;
}

export function groupBy<T>(input: T[], key: string): Record<string, T[]> {
	const result = input.reduce<Record<string, any[]>>((acc, currentValue: any) => {
		const groupKey = currentValue[key]
		if (!acc[groupKey]) {
			acc[groupKey] = []
		}
		acc[groupKey].push(currentValue)
		return acc
	}, {})
  return result
}
