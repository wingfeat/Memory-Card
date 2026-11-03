export default function shuffle(array) {
  const copy = [...array];
  let i = copy.length;

  while (i > 1) {
    i--;
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
