export function caseCorrect(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word: string) {
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    })
    .trim();
}
