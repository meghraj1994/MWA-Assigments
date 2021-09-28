module.exports = function fibonacci(Enternum) {
  const num = Math.abs(Enternum);
  if (num <= 1) return num;
  //Test
  return fibonacci(num - 1) + fibonacci(num - 2);
};
