function solution(age) {
  return 2022 - age + 1;
}

//Try Again !
function solution(age) {
  return new Date().getFullYear() - age + 1;
}

function solution(age) {
  return 2023 - age;
}

/** TIL
 * Date() constructor :
 * new Date((value || dateString))
 * new Date(year, monthIdx, day, hours, minutes, seconds, milliseconds)
 * new Date(Date.UTC(위와 상동))
 *  => 요일 / 월 일 / 년 / 시 분 초 기준
 * 
 * Date Methods ::
 * 
 * 0) Date.prototype.valueOf() // 날짜 객체를 숫자 primitive value로 가져옴
 * 1) Date.prototype[@@toPrimitive]('string'||'number'||'default') // to "convert" obj to primitive value
 * 2) Date.now() // 1970.01.01.00:00:00 UTC로부터 현재까지 경과 시간 (ms)
 * 3) Date.parse() // ?
 * 
 * ///날짜 객체에서만 get, set 가능 (string에서는 안됨)
 * 4) Date.prototype.getDate() // '일' 추출
 * 5) Date.prototype.getDay(), getMonth() // '요일'의 index 추출 : Sunday 0, Saturday 6 / '월'의 index 추출 : January 0, December 11
 * 6) Date.prototype.getFullYear() // '년도' 추출
 * 7) Date.prototype.getHours(), getMinutes() // '시간' 추출 : 0 ~ 23 / '분' 추출 : 0 ~ 59
 * 8) Date.prototype.getSeconds(), getMiliseconds() // 's' 추출 : 0 ~ 59 / 'ms' 추출 : 0~999
 * 
 * 9) Date.prototype.getTime() // 1970.01.01 00:00:00 UTC 로부터 주어진 날짜까지의 경과 시간 (ms), 동일한 시간 객체 생성시, 작업실행 시간 계산 시 등에 쓰임
 * 10) Date.prototype.getTimezoneOffset() // UTC와 현지시간의 차이 (minutes) : 음수: 로컬 시간대가 UTC 보다 앞서있음
 * 11) Date.prototype.getUTCDate(), getUTCDay(), ... 상동 // UTC에 따라 지정된 날짜의 해당 '일', ... 상동
 * 
 * 12) Date.prototype.setDate(), ..., setUTCSeconds() // new Date(1962, 6, 7).setDate(32)  => 1962-07-07 -> 1962-08-01
 * 
 * // 날짜 객체 -> string 변환
 * 13) Date.prototype.toDateString() // 'Fri Dec 16 2022'
 * 14) Date.prototype.toISOString(), toJSON() // '2022-12-16T06:59:55.348Z'
 * 15) Date.prototype.toLocaleDateString() // '12/16/2022'
 * 16) Date.prototype.toLocaleString() // '12/16/2022, 4:21:30 PM'
 * 17) Date.prototype.toLocaleTimeString() // '4:21:30 PM'
 * 18) Date.prototype.toString() // 'Fri Dec 16 2022 16:21:30 GMT+0900 (Korean Standard Time)'
 * 19) Date.prototype.toTimeString() // '16:21:30 GMT+0900 (Korean Standard Time)'
 * 20) Date.prototype.toUTCString() // Fri, 16 Dec 2022 07:21:30 GMT'
 * 
 * 
 * EXAMPLE
 * 1) toPrimitive
 * new Date()[Symbol.toPrimitive]('number') // 1671171983616
 * new Date()[Symbol.toPrimitive]('string') // 'Fri Dec 16 2022 15:26:23 GMT+0900 (Korean Standard Time)'
 * 
 **** 날짜 객체는 같을 경우 서로 뺄셈은 가능하나 (0), 같지는 않다 (=== returns false)
 * 
 **** new Date 결과 format : 'Fri Dec 16 2022 15:26:23 GMT+0900 (Korean Standard Time)'
 * new Date(1671171983616)
 * new Date('December 17, 1995 03:24:00')
 * new Date('1995-12-17T03:24:00')
 * new Date(Date.UTC(2012, 11, 20, 3, 0, 0))
 */