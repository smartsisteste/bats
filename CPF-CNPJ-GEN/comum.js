exports.gera_random = function(n) {
  var ranNum = Math.round(Math.random() * n);
  return ranNum;
};
exports.mod = function(dividendo, divisor) {
  return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
};
