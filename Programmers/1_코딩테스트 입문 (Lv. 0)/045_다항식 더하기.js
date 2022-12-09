function solution(polynomial) {
    let [poly, number] = [polynomial.split('+').filter((el) => el.includes('x')),polynomial.split('+').filter((el) => !el.includes('x'))];

    poly = poly.map((el) => (el.trim() === 'x' ? (el = '1x') : el)).join('').split('x').slice(0, -1).reduce((a, c) => +c + a, 0)
    number = number.reduce((a, c) => +c + a, 0);

    return poly === 0 && number === 0 ? '0' : number === 0 ? poly === 1 ? `x` : `${poly}x` : poly === 0 ? `${number}` : poly===1? `x + ${number}` : `${poly}x + ${number}`; 
}

//Fixed !
function solution(polynomial) {
    let [poly, number] = [polynomial.split('+').filter((el) => el.includes('x')),polynomial.split('+').filter((el) => !el.includes('x'))];
    let answer = [];

    poly = poly.map((el) => (el.trim() === 'x' ? (el = '1x') : el)).join('').split('x').slice(0, -1).reduce((a, c) => +c + a, 0)
    number = number.reduce((a, c) => +c + a, 0);

    if (poly) answer.push(`${poly === 1 ? '' : poly}x`);
    if (number) answer.push(number);

    return answer.join(' + ');
}


/** TIL
 * 🥲 반성
 * 템플릿 리터럴 + 삼항연산자 !
 * 경우의 수 체크보다는 미리 조건으로 정답케이스 정리 후 return하는 것이 쉬움
 */