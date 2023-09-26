//Задание 1
const box = [1, 5, 4, 10, 0, 3];
    for (let inbox of box) {
        if (inbox === box[4]) 
        break; 
        console.log(inbox);
    }

//Задание 2
const num = [1, 5, 4, 10, 0, 3];
console.log(num.indexOf(4));

//Задание 3
const item = [1, 3, 5, 10, 20];
console.log(item.join(' '));

//Задание 4
let array = [];

for (let i = 0; i < 3; i++) {
	array[i] = []; 
	
	for (let j = 0; j < 3; j++) {
		array[i].push(1); 
	}
}

console.log(array);

//Задание 5
const number = [1, 1, 1];

for (let i = 0; i < 3; i++) {
    number.push(1+1);
}
console.log(number);

//Задание 6
const num2 = [9, 8, 7, 'a', 6, 5];
console.log(num2.sort().pop());
console.log(num2);

//Задание 7
const play = [9, 8, 7, 6, 5];
let s = play.includes(Number(prompt('Введите число')));
    for (let i of play) {
    if (i === s) {
        alert('Угадал');
        break
    } else {
        alert('Не угадал');
    }
}

//Задание 8
const line = 'abcdef';
const line2 = Array.from(line);
    console.log(line2.reverse().join(''));

//Задание 9
const oneArray = [[1, 2, 3,], [4, 5, 6]];
const twoArray = [].concat(...oneArray);
    console.log(twoArray);

//Задание 10
const arbitrary = [2, 4, 5, 7, 12, 15];
for (let i = 1; i < arbitrary.length; i++) {
    const result = arbitrary[i] + arbitrary[i - 1] ; 
    console.log(result);
}


//Задание 11
const square = [2, 4, 5, 7, 12, 15];
const result = square.map(el => el ** 2); 
    console.log(result);

//Задание 12
const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const answer = getLengthWords.map(el => el.length); 
    console.log(answer);

//Задание 13
function filterPositive(array) {
    return array.filter(item => item < 0);
  }
  
  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

//Задание 14
const arrRandom = [];
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }
    const riпhtRandom = arrRandom.filter(item => item % 2 ===0);
    console.log(arrRandom);
    console.log(riпhtRandom);

//Задание 15
