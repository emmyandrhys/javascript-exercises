const ftoc = function(f) {
  return Math.round((f - 32) * 50 / 9)/10;
}

const ctof = function(c) {
  return Math.round((9 * c / 5 + 32) * 10 )/ 10;

}

module.exports = {
  ftoc,
  ctof
}
