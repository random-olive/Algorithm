function solution(today, terms, privacies) {
  (terms = terms.map((el) => el.split(' '))).sort();
  let extra = terms.map((t) => t[0]).join('');
  terms = terms.map((t) => +t[1]);
  privacies = privacies.map((p) => p.replace(' ', '.')).map((p) =>
      p.replace(
        extra[extra.indexOf(p[p.length - 1])],
        terms[extra.indexOf(p[p.length - 1])]
      )
    )
    .map((v) => v.split('.')).map((el) =>
        `${Number(el[0]) + Math.floor((Number(el[1]) + Number(el[3])) % 12 ? (Number(el[1]) + Number(el[3])) / 12 : (Number(el[1]) + Number(el[3])) / 12 - 1)}.${(Number(el[1]) + Number(el[3])) % 12 ? (Number(el[1]) + Number(el[3])) % 12 : 12}.${el[2]}`);

  return privacies.map((p, i) => (new Date(p) - new Date(today) <= 0 ? i + 1 : '')).filter((el) => el);
}

//Try Again !
function solution(today, terms, privacies) {
  const extra = {};
  const answer = [];
  terms.forEach(t => extra[t.split(" ")[0]] = t.split(" ")[1]);
  privacies.forEach((p, i) => {
      const [date, term] = p.split(" ");
      const finalDate = new Date(date);
      finalDate.setMonth(finalDate.getMonth() + +extra[term]); //setMonth
      if (finalDate <= new Date(today)) answer.push(i + 1);     
  });
  return answer;
}

//
function solution(today, terms, privacies) { //변수 여러개 사용, map(Number), **수치로 변형->비교**
  var answer = [];
  var [year, month, date] = today.split('.').map(Number);
  var todates = year * 12 * 28 + month * 28 + date;
  var extra = {};
  terms.forEach((t) => {
    let [a, b] = t.split(' ');
    extra[a] = Number(b);
  });
  privacies.forEach((p, i) => {
    var [day, term] = p.split(' ');
    day = day.split('.').map(Number);
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + extra[term] * 28; //객체형은 분리만 되면 쉽게 쓸 수 있었음
    if (dates <= todates) answer.push(i + 1); //answer에 i를 넣어서 return
  });
  return answer;
}

//
function solution(today, terms, privacies) {
  const extra = {};
  const answer = [];
  today = new Date(today);

  for (const t of terms) {
    const a = t.split(' ');
    extra[a[0]] = Number(a[1]);
  }

  for (const idx in privacies) {//for 'idx' in 'arr'
    const a = privacies[idx].split(' '); //[a[0],a[1]]
    const b = new Date(a[0]); //a[0]: 약관 적용 전 날짜
    b.setMonth(b.getMonth() + extra[a[1]]); //달만 따로 setting : setMonth
    if (b <= today) {
      answer.push(Number(idx) + 1);
    }
  }
  return answer;
}

//직관적임 !
function solution(today, terms, privacies) {
  const map = new Map();
  for (let i = 0; i < terms.length; i++) {//split each
      const [type, term] = terms[i].split(' ');
      map.set(type, term * 28);
  }

  return privacies.reduce((a, c, i) => {
      const [date, type] = c.split(' ');
      const [cy, cm, cd] = date.split('.');
      const [ty, tm, td] = today.split('.');

      const currentDays = +cy * 12 * 28 + +cm * 28 + +cd;
      const todayDays = +ty * 12 * 28 + +tm * 28 + +td;

      if (todayDays >= map.get(type) + currentDays) a.push(i + 1);
      return a;
  }, []);
}

//
function solution(today, terms, privacies) {
    let [dY, dM, dD] = today.split('.');
    const currentDays = +dY * 12 + +dM - 1; //?
    let extra = {};

    for (let i = 0; i < terms.length; i++) {
        let [a, b] = terms[i].split(' ');
        extra[a] = b;
    };

    let answer = [];

    for (let i = 0; i < privacies.length; i++) {
        let [a, b] = privacies[i].split(' ');
        let [Y, M, D] = a.split('.');
        let contractDays = +Y * 12 + +M - 1;

        if (currentDays - contractDays > extra[b] || currentDays - contractDays == extra[b] && dD >= D) answer.push(i + 1);
    }

    return answer;
}

//
function calcDate(day) {
  const [year, month, date] = day.split('.').map(e => +e);
  return year * 12 * 28 + month * 28 + date;
}

function solution(today, terms, privacies) {
  const dateOfToday = calcDate(today);
  const dateOfTerms = new Map(terms.map(t => {
      const [type, month] = t.split(' ');
      return [type, +month * 28];
  }));

  return privacies.map((p, i) => {
      const [date, type] = p.split(' ');
      return dateOfToday - calcDate(date) >= dateOfTerms.get(type) ? i + 1 : -1
  }).filter(e => e !== -1);
}

//
function getTimeDiff(current, compare) {
  const monthDates = 28;
  const currYMD = current.split('.');
  let date = 0;

  compare.split('.').forEach((v, i) => {
      if (i === 0) {
          date += (+currYMD[i] - +v) * monthDates * 12;
      } else if (i === 1) {
          date += (+currYMD[i] - +v) * monthDates;
      } else {
          date += (+currYMD[i] - +v)
      }
  });

  return date;
}

function solution(today, terms, privacies) {
  const monthDates = 28;
  const answer = [];

  privacies.forEach((p, i) => {
      const [createdAt, termsType] = p.split(' ');
      if (getTimeDiff(today, createdAt) >= terms.find(v => v[0] === termsType).slice(2) * monthDates) {
          answer.push(i + 1);
      }
  });

  return answer;
}


/** TIL
 * String.prototype.padStart(targetLength[, padString]) //문자열의 길이를 만족하게 왼쪽부터 채움
 * String.prototype.padEnd(targetLength [, padString]) //뒤부터
 *
 * Date.prototype.setDate, setFullYear, setHours, setMonth() ,... -> 쓰임새가 있네..
 * 
 * find //arr
 * 
 **EXAMPLE
 * '01012345678'.slice(-4).padStart(11, '*') //'01012345678'.slice(-4).padStart(11, '*')
 * 
 * 🥲 반성
 * 복잡한 문제 -> 변수를 많이 만들거나, 함수를 잘 만들거나
 */
