const fib = function fibnacci(num) {
  if (num <= 1) return num;
  return fibnacci(num - 2) + fibnacci(num - 1);
};
// module.exports = {
//   fib: fib,
// };

console.log('Fibnacci of 10 is', fib(10));
