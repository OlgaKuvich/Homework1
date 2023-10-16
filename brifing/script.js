//Task 1
function strCount(str, letter){  
  let array = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) array++;
  } return array;
}
strCount("Hello", "o");
strCount(str, letter);

//Task 2
function squareSum(numbers){
      return numbers.reduce((a, b) => a + b * b, 0);
}
squareSum([1, 2, 2]);

//Task 3
function nearestSq(n){
  let i,j;
  for(i=j=n; Math.sqrt(i) %1 !=0 && Math.sqrt(j) % 1 !=0; i++,j--);
    return Math.sqrt(i) %1 == 0 ? i:j
  }
  console.log(nearestSq(21));
 
//Task 4
function solution(str){
  word = str.split(' ').reverse().join(' ');
  return word;
 }
  solution('world');
 

//Task 5
const str = 'The quick brown fox jumps over the lazy dog.';
function addLength(str) {
  const array = [];
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
  array.push(words[i], words[i].length) 
  } return array;
}
addLength(str);

//Task 6

//Task 7
function litres(time) {
  return Math.floor(time * 0.5);
}

//Task 8
function invert(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !=0) {
      array[i] = array[i] * (-1);
    }
  }
  return array;
}
invert([1,-2,3,-4,5]);

//Task 9
function powersOfTwo(n){
  let array = [];
  for (let i = 0; i <= n ; i++) {
  array.push(Math.pow(2,i))
  } 
  return array;    
}
console.log(powersOfTwo(4));

//Task 10
function grow(x){
  for (let i = 0; i < x.length; i++) {
    return x.reduce((a, b) => a * b);
  }
}
  grow([3, 4]);
  
//Task 11
var summation = function (num) {
    for (let i = 1; i <= num; i++) {
      return i = i + 1;
    }
}
  summation(8);

//Task 12
function removeExclamationMarks(s) {
  let line = s.replace(/[!]/g, '');
  return line;
}
removeExclamationMarks('Как удалить! цифры из строки! с помощью JavaScript?!');

//Task 13
var min = function(list){
  const arr = [-52, 56, 30, 29, -54, 0, -110]; 
  Math.min(...arr);
  return list[0];
}
console.log(`min = ${min}`);

var max = function(list){
  const arr = [-52, 56, 30, 29, -54, 0, -110]; 
  Math.max(...arr);
  return list[0];
}

console.log(`max = ${max}`);

//Task 15
function findDifference(a, b) {
  for (let i = 0; i < a.length && b.length; i++) {
    return Math.abs((a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y)));
  }
  }
findDifference([2, 2, 3], [5, 4, 1]);
