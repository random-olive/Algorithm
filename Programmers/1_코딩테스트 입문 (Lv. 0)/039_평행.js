function solution(dots) {
    dots = dots.sort((a, b) => a[0] - b[0]);
  
    if ((dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0]) === (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0])) { return 1 }
    if ((dots[2][1] - dots[0][1]) / (dots[2][0] - dots[0][0]) === (dots[3][1] - dots[1][1]) / (dots[3][0] - dots[1][0])) { return 1 }
    if ((dots[3][1] - dots[0][1]) / (dots[3][0] - dots[0][0]) === (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0])) { return 1 }
  
    return 0;
}

//Fixed !
function solution(dots) {
    dots = dots.sort((a, b) => a[0] - b[0]);
    let arr = [[1, 3, 2], [2, 3, 1], [3, 2, 1],];
  
    for (let [a, b, c] of arr) {
      if ( (dots[a][1] - dots[0][1]) / (dots[a][0] - dots[0][0]) === (dots[b][1] - dots[c][1]) / (dots[b][0] - dots[c][0]) )
        return 1;
      return 0;
    }
  }
