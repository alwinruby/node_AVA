// test.js
 import test from 'ava'
//
// test('one plus one is two', t => {
//   t.is(1 + 1, 2)
// })

// test('async test', t => {
//   t.plan(1)
//   setTimeout(() => {
//     t.is(3, 1 + 2)
//   }, 1000)
// })


// test('async test', t => {
//   return Promise.resolve('wecodetheweb')
//     .then(text => {
//       t.is(text, 'wecodetheweb');
//     });
// })

test('one plus one is two', t => {
  t.is(1 + 1, 2)
})
test.only('two plus one is three', t => {
  t.is(1 + 2, 3)
})
