//  X = 1, O = 2
var combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function main(board) {
  if(draw(board)) {return 0;}
  else if(win(board, 1)) {return 1;}
  else if(win(board, 2)) {return 2;}
  return -1;
}

function checkIfWin(arr) {
  return combinations.some(function(arr2) {
    return arr2.every(function(el) {
      return arr.indexOf(el) > -1;
    });
  });
}

function win(board, n) {
  var m = board.reduce(function(m, arr, i) {
    arr.forEach(function(el, num) {
      return el == n ? m.push((i * 3 + num) + 1) : null;
    });
    return m;
  }, [])
  return checkIfWin(m);
}

function draw(board) {
  return board.every(function(arr, i) {
    return arr.indexOf(0) == -1;
  });
}
