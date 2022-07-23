"use strict";
// ---------
const data = {
    uk: { id: 1, text: 'Привіт!' },
    en: { id: 2, text: 'Hello!' },
    fr: { id: 3, text: 'Salut!' }
};
const expectedResult = [
    { lang: 'en', id: 2, text: 'Hello!' },
    { lang: 'uk', id: 1, text: 'Привіт!' },
    { lang: 'fr', id: 3, text: 'Salut!' }
];
console.log('Expected:');
console.log(JSON.stringify(expectedResult, undefined, '  '));
// Your code
// console.log('Result:');
// console.log(JSON.stringify(myResult, undefined, '  '));
