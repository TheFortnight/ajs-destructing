export default function destrFunc(obj) {
  const arr = [];

  const {
    description = 'Описание недоступно', id, name, icon,
  } = obj.special[0];
  arr.push(['id', id], ['name', name], ['icon', icon], ['description', description]);

  return arr;
}
