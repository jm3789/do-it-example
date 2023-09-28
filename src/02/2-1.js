var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
// 결과: combined = ['one', 'two', 'three', 'four'];
const [first, second, three = 'empty', ...others] = array1;
// 결과: first = 'one', second = 'two', three = 'empty', others = []
// 올바르지 못한 예
// var wrongArr = ...array1;
function func(...args) {
  var [first, ...others] = args;
}
