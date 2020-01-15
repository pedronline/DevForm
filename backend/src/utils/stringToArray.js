module.exports = function stringToArray(str) {
  return str.split(",").map(tech => tech.trim());
};
