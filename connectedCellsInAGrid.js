const matrix = [
    [ 1, 1, 0, 0, 0 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 0, 1, 0, 1, 1 ] 
]
function calcRegion(r, c, matrix, memo) {
    if (r < 0) return 0;
    if (c < 0) return 0;
    if (r > matrix.length - 1) return 0;
    if (c > matrix[r].length - 1) return 0;
    if (matrix[r][c] === 1 && !memo['' + r + c]) {
        memo['' + r + c] = true;
        return 1 +
        calcRegion(r - 1, c, matrix, memo) +
        calcRegion(r + 1, c, matrix, memo) +
        calcRegion(r, c - 1, matrix, memo) +
        calcRegion(r, c + 1, matrix, memo) +
        calcRegion(r - 1, c - 1, matrix, memo) +
        calcRegion(r - 1, c + 1, matrix, memo) +
        calcRegion(r + 1, c - 1, matrix, memo) +
        calcRegion(r + 1, c + 1, matrix, memo);
    }
    return 0;
}

function connectedCell(matrix) {
    let greatestArea = 0;
    // iterate through matrix
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            // if a cell is full
            if (matrix[row][column] === 1) {
                //calculate area of region
                const regionSize = calcRegion(row, column, matrix, {});
                // if area is largest seen
                // store it as greatest Area
                greatestArea = Math.max(greatestArea, regionSize)
            }
        }
    }
    return greatestArea;
  }

  console.log(connectedCell(matrix));