//Задача № 1 

let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задача № 2 

const searchStart = (arr, string) => {
    const search = [];

    arr.forEach((element) => {
        
        if (element.toLowerCase().includes(string.toLowerCase())) {
            search.push(element);
        }
    });
    
    console.log(search);
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); 
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); 
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); 

//Задача № 3 

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

//Задача № 4 

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//Задача № 5 

function rand() {
    console.log(Math.random());
};
rand();

//Задача № 6 

const getRandomArrNumbers = (numbers) => {
    const array = (min, max) => {
        let rando = min + Math.random() * ((max + 1 - min));
        console.log(Math.floor(rando));
    }
    const newArray = [];
    for (let i = 0; newArray.length < Math.floor(numbers / 2); i++) {
        newArray.push(array(0, numbers));
    }
    console.log(newArray);        
    }

getRandomArrNumbers(7);
getRandomArrNumbers(12); 
   
//Задача № 8 

let currentDate = new Date();
console.log(currentDate);

//Задача № 9 

const day = new Date(2023, 9, 30);
day.setDate(day.getDate() + 73);
console.log(day); 

//Задача № 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let myDate = new Date(); 
    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()]; 
    console.log(fullDate); 
    
    let hour = myDate.getHours(); 
    let minute = myDate.getMinutes(); 
    let second = myDate.getSeconds();
    if (minute < 10) { 
        minute = "0" + minute; 
    }
    if (second < 10) { 
        second = "0" + second; 
    }
    console.log("Время: " + hour + ":" + minute + ":" + second); 

//Задача 11 

function gameFruits() {
    
    const gamesArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let gamesArrayNew = gamesArray.sort(() => Math.random() - 0.5);
    alert(gamesArrayNew);

    for (let i = 0; i < gamesArrayNew.length; i++) {
        let firstFruit = gamesArrayNew[0];
        let lastFruit = gamesArrayNew[6];
        let userFirstFruit = prompt('Чему равнялся первый элемент массива?');
        let userLastFruit = prompt('Чему равнялся последний элемент массива?');
        if ((firstFruit.toLowerCase() === userFirstFruit.toLowerCase()) && (lastFruit.toLowerCase() === userLastFruit.toLowerCase())) {
           alert('Поздравляем! Вы угадали оба элемента') 
           break;
        }  else if ((firstFruit.toLowerCase() !== userFirstFruit.toLowerCase()) && (lastFruit.toLowerCase() !== userLastFruit.toLowerCase())){
            alert('Увы, оба ответа неверны!')
            break;
        }
        else {
            alert('Вы были близки к победе, но угадали только один элемент!')
            break;
        }
        
    }

}

gameFruits();