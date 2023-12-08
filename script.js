





// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const randomArr = [
    1,
    "string",
    5,
    {
        word : "hello word"
    },
    6,
    null,
    undefined,
    true,
    Symbol("3"),
    9007199254740992n,
    10
]

function averageOfNumbers (arr) {
    //фильтруем массив за типом number и возращаем новый массив только с числовыми значениями типа "number"
    const newArr = arr.filter(item => typeof item === "number");

    //подсчитывем сумму и среднее значение
    const average = newArr.reduce((acc , item) => acc + item,0) / newArr.length;

    return `${average} - середне аріфметичне значення чисел з масиву`; 
}

console.log(averageOfNumbers(randomArr));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const x = 2;
const y = 3;

function doMath(x,znak,y) {
    let result = 0;
    switch (znak) {
        case "+": 
            return result = x + y;

        case "-":
            return result = x - y;

        case "*":
            return result = x * y;

        case "/":
            return result = (x / y).toFixed(3);

        case "%":
            return result = x % y;

        case "^":
            return result = Math.pow(x,y);

        default :
            return "такої операциї немає";
    }

}

console.log(doMath(x,"+",y));
//5
console.log(doMath(x,"-",y));
//-1
console.log(doMath(x,"*",y));
//6
console.log(doMath(x,"/",y));
//0.667
console.log(doMath(x,"%",y));
//2
console.log(doMath(x,"^",y));
//8
console.log(doMath(x,"v",y));
//такої операциї немає


// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function twoDimensionalArr() {
    const rows = +prompt("Введіть кількість рядків двовимірного масиву");
    const columns = +prompt("Введіть кількість стовпців двовимірного масиву");
    const resultArr = [];
    for(let i = 0 ; i < rows; i++){
        const internalArr = [];
        for (let j = 0; j < columns; j++) {
            internalArr.push(prompt(`Введіть значення для елемента в рядку ${i + 1}, стовпці ${j + 1}`));
        }
        resultArr.push(internalArr);
    }
    return resultArr;
}

    console.log(twoDimensionalArr());

    // Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
    
    function deleteChar(str,deleteCharArr){

        //создаем регулярное выражение из массива arr
        const regex = new RegExp(`[${deleteCharArr.join('')}]`, 'g');
        // удаляем символы при помощи метода replace и регулярного выражения
        const result = str.replace(regex,'');
        return result;
    }

    console.log(deleteChar(" he$llo wo|rld|", ['l', 'd','|','$']));

    // вывод" heo wor"


