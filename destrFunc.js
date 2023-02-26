export default function destrFunc(obj) {
  const arr = [];
  let hasDescription = false;

  for (const [key, value] of Object.entries(obj.special[0])) {
    if (key === 'description') {
      hasDescription = true;
    }

    console.log(`${key}: ${value}`);
    arr.push([key, value]);
  }
  if (!hasDescription) {
    arr.push(['description', 'Описание недоступно']);
  }
  return arr;
}
