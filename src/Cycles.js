/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let x = 0;
    for (let i = start % 2 === 0 ? start : start + 1; i <= end; i += 2) {
        x += i;
    }
    return x;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let x = 0;
    x = a;
    let counter = 0;
    while (x > 0.1) {
        x /= 2;
        counter++;
    }
    return counter;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let result = '';
    let i = 0;
    do {
        result += i % 3 === 2 ? '_' : message.charAt(i);
        i++;
    } while (i < message.length);
    return result;
}
