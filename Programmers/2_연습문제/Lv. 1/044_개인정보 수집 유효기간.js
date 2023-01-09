function solution(today, terms, privacies) {
  terms = terms.map((el) => el.split(' '));
  privacies = privacies.map((el) => el.split(' '));
return privacies.map(p=>terms.map(t=>p[1]===t[0]? p[1]=p[1].replace(t[0],t[1]):''))
}

// "2022.05.19"
// ["A 6", "B 12", "C 3"]
// ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]

//->  [["A","6"],["B","12"],["C","3"]]
//-> [["2021.05.02","A"],["2021.07.01","B"],["2022.02.19","C"],["2022.02.20","C"]]

function solution(today, terms, privacies) {
  terms = terms.map((el) => el.split(' '));
  return privacies = privacies
    .map((p) => (p = p.replace(' ', '.')))
    .map((p) => terms.map((t) => (p.includes(t[0]) ? p.replace(t[0], t[1]) : ''))).map(el=>el.filter(v=>v)).map(el=>el)
}
