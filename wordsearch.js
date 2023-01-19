function transpose(matrix) {
  return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
}

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const transposedGraph = transpose(letters);
  const verticalJoin = transposedGraph.map((ls) => ls.join(''));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  const horizontalJoin = letters.map((ls) => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
