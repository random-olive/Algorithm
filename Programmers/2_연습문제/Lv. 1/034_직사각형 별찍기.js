process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]), b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    console.log('*'.repeat(a));
  }
});

//Try Again !
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]), b = Number(n[1]);
  console.log(('*'.repeat(a) + `\n`).repeat(b));
});

//
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]), b = Number(n[1]);
  let result = '';

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
});

//
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  var a = Number(n[0]), b = Number(n[1]), stars = '';

  while (a-- > 0) stars += '*'; //a는 감소하며, a > 0일 때
  while (b-- > 0) console.log(stars);
});
