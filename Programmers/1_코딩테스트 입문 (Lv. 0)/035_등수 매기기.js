function solution(score) {
  let grade = 1;
  let sorted = score
    .map((el, i) => [(el[0] + el[1]) / 2, i])
    .sort((a, b) => b[0] - a[0]);
  let answer = [];
  for (let i = 0; i < sorted.length; i++) {
    sorted[i][0] = grade;
    grade++;
    if (sorted.filter((el) => el[0] === sorted[i][0])) {
    }
  }

 for (let i=0; i<sorted.length; i++){
     answer[sorted[i][1]]=sorted[i]
 }
 
 return sorted
//  return answer.map(el=>el[0])
}

//answer[5]=sorted[0][0]

//sorted = [[100,5],[95,3],[95,4],[75,0],[75,1],[40,2],[20,6]]

//after sorted = [[1,5],[2,3],[3,4],[4,0],[5,1],[6,2],[7,6]]
              [el[0],el[1]]
                   el

//100,95,95,75,75,40,20

// (el[0]+el[1])/2

//[75,75,40,95,95,100,20]
//[4,4,6,2,2,1,7]

function solution(score) {
  let grade = 2;
  let sorted = score
    .map((el, i) => [(el[0] + el[1]) / 2, i])
    .sort((a, b) => b[0] - a[0]);
  let answer = [];
  sorted.map((el) => (answer[el[1]] = el[0]));
  return answer;
}

function solution(score) {
  let answer = [];
  return score
    .map((el, i) => [(el[0] + el[1]) / 2, i])
    .sort((a, b) => b[0] - a[0]);
  // return score.map((el,i)=>[(el[0]+el[1])/2,i])
}
