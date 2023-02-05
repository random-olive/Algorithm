function solution(food) {
  let menus = food.map((el, i) =>
    el % 2 ? `${i}`.repeat((el - 1) / 2) : `${i}`.repeat(el / 2)
  );
  return menus.join('') + '0' + menus.reverse().join('');
}