module.exports = function solveSudoku(matrix) {
    
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] === 0) {
        for (let tempNumber = 1; tempNumber <= 9; tempNumber++) {
          if (isNumberOk(matrix, i, j, tempNumber)) {
            matrix[i][j] = tempNumber;
            if (solveSudoku(matrix)) {
              return matrix;
            }
            matrix[i][j] = 0;
          }
        }
        return false;
      }
    }
  }

  return true;   
}

function isNumberOk(matrix, tmpRow, tmpCol, tempNumber) {
  let mainRow = Math.floor(tmpRow / 3) * 3;
  let mainCol = Math.floor(tmpCol / 3) * 3;
  
  // check for tempNumber in cols
  for (let col = 0; col < 9; col++) {
    if (col != tmpCol && matrix[tmpRow][col] === tempNumber) {
      return false;
    }
  }
  
  // check for tempNumber in rows
  
  for (let row = 0; row < 9; row++) {
    if (row != tmpRow && matrix[row][tmpCol] === tempNumber) {
        return false;
    }
  }

  // check for tempNumber in square 3x3 
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (row != tmpRow && col != tmpCol && matrix[mainRow + row][mainCol + col] === tempNumber) {
        return false;
      }
    }
  }

  return true;
}
