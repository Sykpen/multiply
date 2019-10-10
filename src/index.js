module.exports = function multiply(first, second) {
  first = BigInt(first);
  second = BigInt(second);
  let result =  first * second;
  result = String(result);
  return result
}
