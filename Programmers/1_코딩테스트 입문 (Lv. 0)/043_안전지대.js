function solution(board) {
  for (let j = 0; j < board[0].length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][j] === 1) {
        if ([i - 1] >= 0 && [j - 1] >= 0 && board[i - 1][j - 1] !== 1)
          board[i - 1][j - 1] = -1;
        if ([i - 1] >= 0 && board[i - 1][j] !== 1) board[i - 1][j] = -1;
        if ([i - 1] >= 0 && board[i - 1][j + 1] !== 1) board[i - 1][j + 1] = -1;
        if ([j - 1] >= 0 && board[i][j - 1] !== 1) board[i][j - 1] = -1;
        if (board[i][j + 1] !== 1) board[i][j + 1] = -1;
        if (board[i + 1]) {
          if ([j - 1] >= 0 || board[i + 1][j - 1] !== 1)
            board[i + 1][j - 1] = -1;
          if (board[i + 1][j] !== 1) board[i + 1][j] = -1;
          if (board[i + 1][j + 1] !== 1) board[i + 1][j + 1] = -1;
        }
      }
    }
  }
  return board.flat().filter((el) => el === 0).length;
}

//Try Again !
function solution(board) {
  let outside = [[-1, 0], [-1, -1], [-1, 1], [0, -1], [0, 1], [1, 0], [1, -1], [1, 1]];
  let safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((el, x) => { 
        if (el === 1) return false; 
        return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x]) ? false : safezone++;
    })
    );

  return safezone;
}

//2
function solution(board) {
  for (let y = 0; y < board.length; y++)
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] == 1) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (board[y + i]?.[x + j] === 0) board[y + i][x + j] = 2;
          }
        }
      }
    }

  return board.flat().filter((v) => v == 0).length;
}

//3
var a = [[-1, -1],[-1, 0],[-1, 1], [1, -1], [1, 0], [1, 1], [0, -1], [0, 1],], n, x, y, solution = (b) => {
    return (
      (n = b.length),
      b.flat().reduce((t, v, i) => {
        return (
          (x = Math.floor(i / n)),
          (y = i % n),
          t + (v == 0 && !a.some(([p, q]) => b[x + p] && b[x + p][y + q]))
        );
      }, 0)
    );
};


//4
function bfs(board, y, x) {
  const n = board.length;
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  for (const [dy, dx] of directions) {
    const [ny, nx] = [y + dy, x + dx];
    if (0 <= ny && ny < n && 0 <= nx && nx < n) {
      if (board[ny][nx] === 0) { board[ny][nx] = 2 }
    }
  }
}

function solution(board) {
  board.forEach((row, y) => {
    row.forEach((mine, x) => {
      if (mine === 1) {
        bfs(board, y, x);
      }
    });
  });

  return board.reduce(
    (total, row) =>
      total + row.reduce((prev, value) => (value === 0 ? prev + 1 : prev), 0),
    0
  );
}

//5
function solution(board) {
  let cnt = 0;
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      let danger = false;
      for (let k = -1; k <= 1; ++k) {
        if (i + k < 0 || i + k >= board.length) continue;
        for (let l = -1; l <= 1; ++l) {
          if (j + l < 0 || j + l >= board[0].length) continue;
          if (board[i + k][j + l] === 1) danger = true;
        }
      }
      if (!danger) cnt++;
    }
  }
  return cnt;
}

//6
function solution(board) {
  const n = board.length;
  const dy = [-1, -1, -1, 0, 1, 1, 1, 0];
  const dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        for (let k = 0; k < 8; k++) {
          const ny = i + dy[k];
          const nx = j + dx[k];
          if (0 <= ny && ny < n && 0 <= nx && nx < n && board[ny][nx] === 0) {
            board[ny][nx] = 2;
          }
        }
      }
    }
  }
  return board.reduce((acc, e) => acc + e.filter((el) => el === 0).length, 0);
}


/** TIL
 * Optional chaining : ?.  => 존재하지 않을 수 있는 것의 속성값을 읽을 수 있다 : returns undefined, not throwing error
 * 
 * Operator : !!  => 확실한 논리결과를 가지기 위함 : 정의되지 않은 undefined 등의 값에도 확실한 true / false 값을 줌 + NOT
 * 
 * 
 ** EXAMPLE
 * /// Optional chaining ?.
 * 
 * obj?.prop
 * obj?.[expr]
 * arr?.[index]
 * func?.(args)
 * 
 * let myMap = new Map();
 * myMap.set("foo", {name: "baz", desc: "inga"});
 * let nameBar = myMap.get("bar")?.name;  //undefined
 * let nameBar = myMap.get("foo")?.name;  //'baz'
 * 
 * 
 * /// Operator !!
 * let a = undefined || null
 * !a  => true
 * !!a  => false
 * 
 * let b = true;
 * !b  => false
 * !!b  => true
 * 
 */

