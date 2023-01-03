function solution(d, budget) {
  let result = 0;
  
  d = d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    result += d[i];
    if (result > budget) return i;
    else if (result === budget) return i + 1;
  }
}
