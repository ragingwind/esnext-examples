console.log('## intl-date-time-format');

const start = new Date(Date.UTC(2019, 0, 10, 10, 0, 0));
const end = new Date(Date.UTC(2019, 0, 10, 11, 0, 0));
const fmt = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

console.log(`fmt.formatRange(start, end)`, fmt.formatRange(start, end));