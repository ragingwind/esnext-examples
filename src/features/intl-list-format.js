console.log('## intl-list-format');

const lfEnglish = new Intl.ListFormat('en', {type: 'disjunction'});
const lfKorean = new Intl.ListFormat('ko', {type: 'conjunction'});

const list = ['Ada', 'Grace', 'Ida'];

console.log(`lfEnglish.format(list)`, lfEnglish.format(list));
console.log(`lfKorean.format(list)`, lfKorean.format(list));
