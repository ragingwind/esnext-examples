console.log('## array-flat-flat-map');

{
  const array = [1, [2, [3]]];
  console.log('[1, [2, [3]]].flat()', array.flat())
  console.log('[1, [2, [3]]].flat(Infinity)', array.flat(Infinity))
}

{
  const duplicate = (x) => [x, x];
  console.log('[2, 3, 4].flatMap(duplicate)', [2, 3, 4].flatMap(duplicate))
}