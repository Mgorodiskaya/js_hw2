const logItems = function (array) {
    let index;
    
    for ( const item of array) {
        console.log(`${array.indexOf(item)+1} - ${item}` );
    }
    return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);