//Задача 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 function compareNumbers(a, b) {
    return a.age - b.age;
  }
  
console.log(people.sort(compareNumbers));

//Задача 2

function isPositive(a) {
    return a > 0;
    }
    function isMale(i) {
    return i.gender === 'male';
    }
    function filter(arr, callback) {
        const filterArr = [];
        for (const i of arr) {
            if (callback(i)) {
                filterArr.push(i);
            }
        }
        return filterArr;
    }
        
    console.log(filter([3, -4, 1, 9], isPositive));
    
const peopleGender = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(peopleGender, isMale)); 

//Задача 3 

function printCurrentDate() {
    const currentDate = new Date();
    console.log(currentDate);
}

let secondsPassed = 0;
    const interval = 3000; 
    const totalTime = 30000; 
    const timerId = setInterval(function () {
        printCurrentDate();
        secondsPassed += interval / 1000; 
        if (secondsPassed >= totalTime / 1000) {
            clearInterval(timerId); 
            console.log("30 секунд прошло");
        }
    }, interval);

//Задача 4 

function delayForSecond(callback) {
	setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//Задача 5 

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { cb();}

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))
