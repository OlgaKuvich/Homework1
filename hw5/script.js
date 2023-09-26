"use strict";

//Задание 1

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

function result() {
    if (a < b || a === b) {
        console.log(a)

    } else {
            console.log(b);
        }
    }   
    result();

//Задание 2

let z = Number(prompt('Введите число'));

function parity() {
    if (z % 2 === 0) {
        console.log('Число четное')
    
    } else {console.log('Число нечетное');
        }
}
    parity();

//Задание 3.1

let c = Number(prompt('Введите любое число'));

function numberSquare() {
    let numberSquare = c ** 2;
    return numberSquare;
    }   
    
    numberSquare();

//Задание 3.1

let d = Number(prompt('Введите любое число'));

function numberCube() {
    let numberCube = d ** 3;
    return numberCube;
    }   
        
    numberCube();

//Задание 4

function printMessage() {

    let age = prompt("Сколько Вам лет?");

    if (age < 0) {
        console.log("Вы ввели неправильное значение!");
    
    }  else if (age <= 12) {
        console.log("Привет, друг!");
    
        } else {
            console.log("Добро пожаловать!");
       }
    }
printMessage();

//Задание 5

let e = Number(prompt('Введите первое число'));
let f = Number(prompt('Введите второе число'));

function result() {
    if (!isNaN(e) || !isNaN(f)) {
    console.log(e * f);  

    } else {
    console.log('Одно или оба значения не являются числом');
    }  
} 
    result();

//Задание 6

let n = Number(prompt('Введите число')); 
 
function numCube () { 
    if (!isNaN(n)) { 
    console.log(`n в кубе равняется ${n ** 3}`); 
        
    } else { 
   console.log('Переданный параметр не является числом'); 
      } 
};

 numCube ();


//Задание 7

function getRectangleArea() {
    return this.radius ** 2 * 3.14;
}
function getRectanglePerimiter() {
   return this.radius * 2 * 3.14; 
}
const circle1 = {
    radius: 4,

    getArea: getRectangleArea,
    getPerimiter: getRectanglePerimiter,
}

const circle2 = { 
    radius: 3,

    getArea: getRectangleArea,
    getPerimiter: getRectanglePerimiter,
}
    console.log(`Площадь первого круга равна  ${circle1.getArea()}`);
    console.log(`Периметр первого круга равен ${circle1.getPerimiter()}`);
    console.log(`Площадь второго круга равна ${circle2.getArea()}`);
    console.log(`Периметр второго круга равен ${circle2.getPerimiter()}`);

//Задание 8

let monthNumber = Number(prompt('Введите число от 1 до 12'));
    
    function result() {
        if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
            console.log('Это зима');

        } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
                console.log('Это весна');

        } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
                    console.log('Это лето');

        } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
                        console.log('Это осень');

        } else {
                console.log('Такого месяца не существует!');
            }
        }
    result();
    