export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string') {
    return '';
  }
  const newSet = [];
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      newSet.push(element.slice(startString.length));
    }
  });
  return newSet.join('-');
}
