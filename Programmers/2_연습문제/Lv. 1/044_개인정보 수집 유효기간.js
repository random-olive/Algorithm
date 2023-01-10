function solution(today, terms, privacies) {
  terms = terms.map((el) => el.split(' '));
  privacies = privacies.map((el) => el.split(' '));
  return privacies.map((p) =>
    terms.map((t) => (p[1] === t[0] ? (p[1] = p[1].replace(t[0], t[1])) : ''))
  );
}

// "2022.05.19"
// ["A 6", "B 12", "C 3"]
// ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]

//->  [["A","6"],["B","12"],["C","3"]]
//-> [["2021.05.02","A"],["2021.07.01","B"],["2022.02.19","C"],["2022.02.20","C"]]

function solution(today, terms, privacies) {
  terms = terms.map((el) => el.split(' '));
  return (privacies = privacies
    .map((p) => (p = p.replace(' ', '.')))
    .map((p) =>
      terms.map((t) => (p.includes(t[0]) ? p.replace(t[0], t[1]) : ''))
    )
    .map((el) => el.filter((v) => v)));
}

function solution(today, terms, privacies) {
  terms = terms.map((el) => el.split(' '));
  terms = Object.entries(obj).forEach(([key, value]) => {
    key: value;
  });
  // return (privacies = privacies.map((p) => p.replace(' ', '.').split('.')));
  return terms;
}

function solution(today, terms, privacies) {
  let obj = {};
  terms = terms.map((el) => el.split(' ')).map((t) => (obj[t[0]] = t[1])); //{'A':'6','B':'7'}
  privacies = privacies.map((el) => el.replace(' ', '.'));
  for (let i = 0; i < privacies.length; i++) {
    for (let j = 0; j < terms.length; j++) {}
  }

  // .map((p) => p.replace('D', '5')).map((p) => p.replace('Z', '3'))
  // .split('.')); //["2019","01","01","D"]
  // return privacies.map((p) => (p[3] = obj[p[3]]));
}

//
function solution(today, terms, privacies) {
  (terms = terms.map((el) => el.split(' '))).sort();
  let list = terms.map((t) => t[0]).join(''); //['D','Z']
  terms = terms.map((t) => +t[1]); //[5,3]
  privacies = privacies
    .map((p) => p.replace(' ', '.'))
    .map((p) =>
      p.replace(
        list[list.indexOf(p[p.length - 1])],
        terms[list.indexOf(p[p.length - 1])]
      )
    )
    .map(v=>v.split('.')).map(el=>`${Number(el[0])+Math.floor((Number(el[1])+Number(el[3]))/12? (Number(el[1])+Number(el[3]))/12:0)}.${(Number(el[1])+Number(el[3]))%12? (Number(el[1])+Number(el[3]))%12:12}.${el[2]}`) 
   
    //2019,2019,2019,2019,2019,2018
    //6,14,13,12,15
    return privacies
    // return privacies.filter((p,i)=>new Date(p)-new Date(today)<0)
}
