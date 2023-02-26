import destrFunc from '../destrFunc';

const character1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  },
  ],
};

const character2 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

test('с описанием', () => {
  const result = destrFunc(character1);
  expect(result).toEqual([
    ['id', 8],
    ['name', 'Двойной выстрел'],
    ['icon', 'http://...'],
    ['description', 'Двойной выстрел наносит двойной урон'],
  ]);
});

test('без описания', () => {
  const result = destrFunc(character2);
  expect(result).toEqual([
    ['id', 9],
    ['name', 'Нокаутирующий удар'],
    ['icon', 'http://...'],
    ['description', 'Описание недоступно'],
  ]);
});
