function solution(id_pw, db) {
    let check = db.map((el) =>
        el[0] === id_pw[0] && el[1] === id_pw[1] ? 'login' : 
        el[0] === id_pw[0] ? 'wrong pw' : 
        el[0] !== id_pw[0] ? 'fail' : null
      ).filter((el) => el === 'login' || el === 'wrong pw');
    return check.length === 0 ? 'fail' : check[0];
  }


//Try Again !
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

const solution = (id_pw, db) => {
  const checkId = db.filter((el) => el[0] === id_pw[0]).flat();
  if (checkId.length > 0) {
    return checkId[1] === id_pw[1] ? 'login' : 'wrong pw';
  }
  return 'fail';
};

function solution(id_pw, db) {
  let checkId = db.find(([el]) => el === id_pw[0]);
  if (checkId) {
    return checkId[1] === id_pw[1] ? 'login' : 'wrong pw';
  }
  return 'fail';
}

function solution(id_pw, db) {
  db = db.filter((el) => el[0] === id_pw[0]);

  if (!db.length) return 'fail';
  for (let el of db) if (el[1] === id_pw[1]) return 'login';
  return 'wrong pw';
}


/** TIL
 * Map.prototype.has(key)  => boolean
 * Map.prototype.get(key)  => value
 *
 * Array.prototype.flat((depth))  => array
 * Array.prototype.find((el, idx, arr) => {})  => array  // 함수 넣으면 해당 el 찾아줌
 * 
 * for (const el of arr) {el...}
 * for (const prop in obj) {prop...obj[prop]}
 * 
 * 
 ** EXAMPLE
 * let map = new Map([ ['id', 'pw']  ])
 * map.has('id')  => true
 * map.get('id')  => 'pw'
 * 
 * [0, 1, 2, [[[3, 4]]] ].flat(2)  => [0, 1, 2, [3, 4]]
 * 
 * 
 * 🥲 반성
 * 순차적으로 쪼개어 생각하기 : 순차적으로 필터링 + 조건문
 *
 */
