//Задание 1

let password = '123456';
let test = prompt('Введите пароль');

if (password === test) {alert('Пароль введен верно');
    
} else {
    alert('Пароль введен неправильно');
}

//Задание 2

let c = Number(prompt('Введите число'));

if (c > 0 && c < 10) {alert('Верно');
    
} else {
    alert('Не верно');
}

//Задание 3

let d = Number(prompt('Введите число'));
let e = Number(prompt('Введите ещё одно число'));

if (d > 100 || e > 100) {alert('Верно');
    
} else {
    alert('Не верно');
}

//Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case '1':
        console.log('Это зима');
        break;
    case '2':
        console.log('Это зима');
        break;
    case '3':
        console.log('Это весна');
        break;
    case '4':
        console.log('Это весна');
        break;
    case '5':
        console.log('Это весна');
        break;
    case '6':
        console.log('Это лето');
        break;
    case '7':
        console.log('Это лето');
        break;
    case '8':
        console.log('Это лето');
        break;
    case '9':
        console.log('Это осень');
        break;
    case '10':
        console.log('Это осень');
        break;
    case '11':
        console.log('Это осень');
        break;
    case '12':
        console.log('Это зима');
        break;
                                                                                                                
    default:
        console.log('Такого месяца не существует');
        break;
}

//Задание 7

let n = Number(prompt('«Пожалуйста, введите любое число»'));

(n % 2 === 0) ? console.log('Число чётное') : console.log('Число нечётное');

//Задание 8

let clientOS;

if (clientOS == 0) {console.log('Установите версию приложения для iOS по ссылке');
    
} else if (clientOS == 1) {
    console.log('Установите версию приложения для Android по ссылке»');
} else console.log('Установите версию для компьютера');

//Задание 9

let year;

if (clientOS == 0 && year < 2015) {console.log('Установите облегченную версию приложения для iOS по ссылке')
    
} else if (clientOS == 0 && year > 2015) {
    console.log('Установите версию приложения для iOS по ссылке»');
}

if (clientOS == 1 && year < 2015) {console.log('Установите облегченную версию приложения для Android по ссылке')
    
} else if (clientOS == 1 && year > 2015) {
    console.log('Установите версию приложения для Android по ссылке»');
}  

