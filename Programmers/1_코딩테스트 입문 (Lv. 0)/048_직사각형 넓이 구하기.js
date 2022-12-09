function solution(dots) {
    let [x, y] = [dots.map((el) => el[0]).sort((a, b) => a - b), dots.map((el) => el[1]).sort((a, b) => a - b)];
  
    return (x[3] - x[0]) * (y[3] - y[0]);
  }

//Try Again !
var s = Math.abs, solution = ([[a, b], [c, d], [e, f]]) => s(a - (a == c ? e : c)) * s(b - (b == d ? f : d));
