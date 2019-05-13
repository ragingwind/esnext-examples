console.log('## intl-local');

const locale = new Intl.Locale('es-419-u-hc-h12', {
  calendar: 'gregory'
});

console.log('locale.language', locale.language);
console.log('locale.calendar', locale.calendar);
console.log('locale.hourCycle', locale.hourCycle);
console.log('locale.region', locale.region);
console.log('locale.toString', locale.toString());