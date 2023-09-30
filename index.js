let monthNumber = Number(prompt('Введите число от 1 до 12'));
    
    function result() {
        if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
            alert('Это зима');

        } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
                alert('Это весна');

        } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
                    alert('Это лето');

        } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
                        alert('Это осень');

        } else {
                alert('Такого месяца не существует!');
            }
        }
    result();
    

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