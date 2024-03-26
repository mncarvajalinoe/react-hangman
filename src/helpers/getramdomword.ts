let words: string[] = [
  "computadora",
  "agua",
  "papaya",
  "gato",
  "perro",
  "vegetal",
  "celular",
  "cagar",
  "matematicas",
  "filosofia",
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex].toUpperCase();
}
