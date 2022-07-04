export default function giveRaitingSmile(abv) {
  if (abv > 10) {
    return "🫠";
  }
  if (abv < 10 && abv > 5) {
    return "😎";
  }
  if (abv < 5) {
    return "😊";
  }
}
