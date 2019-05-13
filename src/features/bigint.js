console.log('## bigint');

console.log('123456789123456789n * 123n', 123456789123456789n * 123n);
console.log('100000000000000000n.toLocaleString(\'ko\')', 100000000000000000n.toLocaleString('ko'));

const ko = new Intl.NumberFormat('ko');
console.log('ko.format(123456789123456789n)', ko.format(123456789123456789n));