const fib = function fibnacci(enterNum) {
  const num = Math.abs(enterNum);
  if (num <= 0) return num;
  return fibnacci(num - 2) + fibnacci(num - 1);
};
module.exports = {
  fib: fib,
};
