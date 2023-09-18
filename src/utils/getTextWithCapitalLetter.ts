export function getTextWithCapitalLetter(text: string): string {
  const array = text.split('');
  const firstLetterUpper = array[0].toUpperCase();
  array.splice(0, 1, firstLetterUpper);

  return array.join('');
}
