console.log('## intl-relative-time');

const rtf = new Intl.RelativeTimeFormat('ko', {numeric: 'auto'});

console.log(`rtf.format(-1, 'day')`, rtf.format(-1, 'day'));
console.log(`rtf.format(0, 'day')`, rtf.format(0, 'day'));
console.log(`rtf.format(+1, 'day')`, rtf.format(+1, 'day'));
console.log(`rtf.format(-1, 'week')`, rtf.format(-1, 'week'));
console.log(`rtf.format(0, 'week')`, rtf.format(0, 'week'));
console.log(`rtf.format(+1, 'week')`, rtf.format(+1, 'week'));