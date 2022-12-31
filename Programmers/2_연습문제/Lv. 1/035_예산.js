function solution(d, budget) {
  d = d.sort((a, b) => a - b);
  return d.reduce((a,c,i)=>{if (a>=budget){a+c} return i},0)
}
