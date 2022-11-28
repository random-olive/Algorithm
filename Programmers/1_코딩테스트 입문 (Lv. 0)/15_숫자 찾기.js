function solution(num, k) {
  let check = `${num}`.indexOf(k);
  return check === -1 ? -1 : check + 1;
}

/** TIL
 * Template literals : `${}`  => string
 * 
 *
 ** EXAMPLE
 * Multi-line strings : 
 * `string text line 1
 *  string text line 2`
 *  =>  "string text line 1
 *       string text line 2"
 * 
 * Nesting templates : 
 * const classes = `header ${ isLargeScreen() ? '' : `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
 * 
 * Tagged templates : 
 * 
 * var person = 'Mike'; var age = 28;
 * 
 * function myTag(strings, personExp, ageExp) {
 *     var ageStr;
 *     if (ageExp > 99){
 *     ageStr = 'centenarian';
 *     } else {
 *     ageStr = 'youngster';
 *     }
 * 
 *  return strings[0] + personExp + strings[1] + ageStr + strings[2]
 * }
 * 
 * var output = myTag`that ${ person } is a ${ age }`;
 */
