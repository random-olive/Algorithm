function solution(sizes) {
  let max = [];
  let min = [];
  sizes.map((el) => {max.push(Math.max(...el)); min.push(Math.min(...el))});
  //const newSizes = sizes.map(el => el.sort((a, b) => a - b));
  return Math.max(...max) * Math.max(...min);
  //return Math.max(...newSizes.map(e => e[0])) * Math.max(...newSizes.map(e => e[1]));
}

//Try Again !
function solution(sizes) {//a, c를 각각 배열로 치환해서 c의 최대값 찾는 것과, a와의 비교-> 최대값 찾는 것을 한번에 처리
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0]);
  //const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, a, b), Math.max(v, Math.min(a, b))], [0, 0])
  return hor * ver;
}

//
function solution(sizes) {
  let w = 0, h = 0;
  //const arr = sizes.map(([w,h]) => w < h ? [h,w] : [w,h])
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}

//
function solution(sizes) {
  sizes.map((item) => item.sort((a, b) => b - a));
  let hMax = Math.max.apply(null, sizes.map((item) => item[0]));
  let vMax = Math.max.apply(null, sizes.map((item) => item[1]));
  return hMax * vMax;
}

//
var solution = (sizes) => Math.max(...sizes.map((x) => Math.max(x[0], x[1]))) * Math.max(...sizes.map((x) => Math.min(x[0], x[1])));

/** TIL
 * Function.prototype.apply(thisArg, [argsArray]) : apply는 arguments 단일 배열을 받는다
 * -> this값과 배열로 제공되는 arguments로 함수를 호출함 : call과 비슷
 * 
 * Function.prototype.call(thisArg[, arg1[, arg2[, ...]]]) : call은 전달될 인수 리스트를 받는다
 * -> 이미 할당되어 있는 다른 객체의 함수/메서드를 호출하는 해당 객체에 재할당(상속!)할 때 사용
 * 
 ** EXAMPLE
 * //apply
 * var array = ['a', 'b'], elements = [0, 1, 2];
 * array.push.apply(array, elements); //["a", "b", 0, 1, 2]
 * 
 * //apply와 Math.max같은 내장함수 사용 시 너무 많은 인수를 쓰지 않도록 한다 : 인수 제한에 따라 일부만 받아질 경우, for와 slice로 처리해서 받아야 한다.
 * function minOfArray(arr) { 
 * var min = Infinity;
 * var QUANTUM = 32768;
 * 
 * for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
 * var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
 * min = Math.min(submin, min)
 * }
 * return min
 * }
 * var min = minOfArray([5, 6, 2, 3, 7]); //2
 * 
 * //call
 * function Product(name, price) {this.name = name; this.price = price}
 * function Food(name, price) {Product.call(this, name, price); this.category = 'food'}
 * console.log(new Food('cheese', 5).name); //cheese
 *
 * 🥲 반성
 * parameter를 배열로 초기 세팅
 * map 연산이 확실히 Math.max나 push 등에 비해 high cost한 연산인 것 같다
 * Math.max가 반복되면 한번에 해도 된다
 */
