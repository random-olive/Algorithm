function solution(phone_number) {
  let len = phone_number.length - 4;
  return (
    phone_number.slice(0, len).replace(/\d/g, '*') + phone_number.slice(len)
  );
}

//Try Again !
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, '*');
}

//
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

//
function solution(phone_number) {
  //return [...phone_number].fill('*', 0, phone_number.length - 4).join('');
  return Array(phone_number.length-3).join('*')+phone_number.slice(-4)
}

/** TIL
 * 🥲 반성
 * Array.fill, join으로 str 변경하기
 */
