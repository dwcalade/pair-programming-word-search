const transpose = (matrix) => {
    let newMatrix = [];

    for (let i = 0; i < matrix[0].length; i++){
        newMatrix.push([])
        for (let j = 0; j < matrix.length; j++) {
            newMatrix[i][j] = matrix[j][i]
        }
    }
    return newMatrix
}

const wordSearch = (letters, word) => {
    if (letters.length === 0) return false
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''))

    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false
}


wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'], 
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ])

module.exports = wordSearch;