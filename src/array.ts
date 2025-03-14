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