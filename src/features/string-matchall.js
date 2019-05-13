console.log('## string-matchall');

{
  const string = 'Magic hex number: DEADBEEF CAFE';
  const regex = /\b\p{ASCII_Hex_Digit}+\b/gu;
  
  for (const match of string.matchAll(regex)) {
    console.log('match', match);
  }
}

{
  const string = 'Favorite Github repos: tc39/ecma262 v8/v8.dev';
  const regex = /\b(?<owner>[a-z0-9]+)\/(?<repo>[a-z0-9\.]+)\b/g;

  for (const match of string.matchAll(regex)) {
    console.log(`${match[0]} at ${match.index} with '${match.input}'`);
    console.log(`-> owner: ${match.groups.owner}`);
    console.log(`-> repo: ${match.groups.repo}`);
  }
}