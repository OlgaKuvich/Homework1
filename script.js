


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