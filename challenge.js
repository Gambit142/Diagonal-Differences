function diagonalDifference(arr) {
  // Write your code here
  let rightDiagonal =  0;
  let leftDiagonal = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j-- ) {
      rightDiagonal += arr[i][i]
      leftDiagonal += arr[i][j]
  }

  // for(var i=0; i<arr.length; i++){
  //   for(var j=0; j<arr.length; j++){
  //       // an element from the main diagonal
  //       if(i === j) { 
  //           rightDiagonal += arr[i][j];
  //       }
  //       // an element from the counterdiagonal
  //       if(i + j === n - 1){
  //           leftDiagonal += arr[i][j];
  //       }
  //   }
  // }

  
  return Math.abs(rightDiagonal - leftDiagonal)
}