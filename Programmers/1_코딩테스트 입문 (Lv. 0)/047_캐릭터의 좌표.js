function solution(keyinput, board) {
    let [x, y] = board;
    let limit = [(x - 1) / 2, (y - 1) / 2];
    let answer = [0, 0];

    keyinput.forEach((el) => {
        if (el === 'up' && answer[1] !== limit[1]) answer[1]++;
        if (el === 'down' && answer[1] !== -limit[1]) answer[1]--;
        if (el === 'left' && answer[0] !== -limit[0]) answer[0]--;
        if (el === 'right' && answer[0] !== limit[0]) answer[0]++;
    });

    return answer;
}

//Try Again !
const CONTROL = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
};

function solution(keyinput, [n, m]) {
    const [x1, x2, y1, y2] = [-~~(n / 2), ~~(n / 2), -~~(m / 2), ~~(m / 2)];
    return keyinput.reduce(([x, y], c) => {
        const [nx, ny] = [x + CONTROL[c][0], y + CONTROL[c][1]];
        if (x1 <= nx && nx <= x2 && y1 <= ny && ny <= y2) return [nx, ny];
        return [x, y]
    }, [0, 0]);
}

//
function solution(keyinput, board) {
    let answer = [0, 0];
    let [bndrX, bndrY] = [(board[0] - 1) / 2, (board[1] - 1) / 2];
  
    keyinput.forEach((cmd) => {
      switch (cmd) {
        case 'up': {
          if (answer[1] !== bndrY) answer[1]++; break;
        }
        case 'down': {
          if (answer[1] !== -bndrY) answer[1]--; break;
        }
        case 'left': {
          if (answer[0] !== -bndrX) answer[0]--; break;
        }
        case 'right': {
          if (answer[0] !== bndrX) answer[0]++; break;
        }
      }
    });
  
    return answer;
}

//
function solution(keyinput, board) {
    let answer = [0, 0];

    keyinput.forEach((el) => {
        const arr = [...answer];
        el == 'up' ? arr[1]++ : el == 'down' ? arr[1]-- : el == 'left'  ? arr[0]--  : arr[0]++;

        if (!arr.some((v, i) =>!(-Math.floor(board[i] / 2) <= v && v <= Math.floor(board[i] / 2)))) answer = arr;
    });

    return answer;
}

//
function solution(keyinput, board) {
    const [limitX, limitY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    const directions = {
        up: [0, 1],
        down: [0, -1],
        left: [-1, 0],
        right: [1, 0],
    };
    let [x, y] = [0, 0];

    for (const key of keyinput) {
        const [dx, dy] = directions[key];
        const [nx, ny] = [x + dx, y + dy];
        
        if (-limitX <= nx && nx <= limitX && -limitY <= ny && ny <= limitY) {
            [x, y] = [nx, ny];
        }
    }
    return [x, y];
}

/** TIL
 * Switch Statement : 
 * 
 * switch (expression) {
 * case value1: //Statements executed when the result of expression matches value1 or default case doesn't exist
 * [break;]
 * 
 * case value2:
 * [break;]
 * 
 * ...
 * 
 * case valueN:
 * [break;]
 * 
 * [default: //Statements executed when none of the values match the value of the expression
 * [break;]]
 * }
 * 
 ** EXAMPLE
 * function sequentialSizes(val) { //cases share the same value
 * var answer = "";
 * switch (val){
 *  case 1:
 *  case 2:
 *  case 3: 
 *    answer = "Low"; 
 *    break;
 *  case 4:
 *  case 5:
 *  case 6: 
 *    answer = "Mid";
 *    break;
 *  case 7:
 *  case 8:
 *  case 9:
 *    answer = "High"; 
 *    break;
 * }
 * return answer;
 * }
 * 
 * 🥲 반성
 * reduce 활용법
 * (n-1)/2 , ~~ (n/2) , Math.floor(n/2)
 * object, arr의 활용
 */



