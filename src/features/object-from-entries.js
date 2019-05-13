console.log('## object-from-enties');

const object = {x: 42, y: 50};
const entries = Object.entries(object);

console.log('Object.entries(object)', entries);

for (const [key, value] of entries) {
  console.log(`The value of ${key} is ${value}`);
}

console.log('Object.fromEntries(entries)', Object.fromEntries(entries))