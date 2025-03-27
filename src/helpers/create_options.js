export function create_options(list) {
  return ['all', ...list].map((type) => {
    return {
      value: type,
      label: type,
    };
  });
}

// let s = create_options(['all', 'ikea', 'one', 'two', 'three']);
let s = create_options([
  '#ffb900',
  '#ff0000',
  '#0000ff',
  '#000',
  '#00ff00',
  '#all',
]);
console.log(s);
