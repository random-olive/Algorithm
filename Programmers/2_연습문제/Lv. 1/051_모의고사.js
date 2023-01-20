function solution(answers) {
  answers = answers.join('');
  //let len = answers.length;
  let one = '12345'.repeat(2000); //Math.ceil(len/5)
  let two = '21232425'.repeat(1250); //Math.ceil(len/8)
  let three = '3311224455'.repeat(1000); //Math.ceil(len/10)
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i] === answers[i]) score[0]++;
    if (two[i] === answers[i]) score[1]++;
    if (three[i] === answers[i]) score[2]++;
  }

  let max = Math.max(...score);
  return score.map((el, i) => {if (el === max) return i + 1}).filter((v) => v);
}
