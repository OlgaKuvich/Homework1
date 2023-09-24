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