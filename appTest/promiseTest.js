'use strict'

var p1 = new Promise(function (resolve, reject) {
    //异步代码
    for (var i = 0; i < 10000; i++) {
        if (i === 5000 && console.log('Promise' + i));
        if (i === 9999) {
            console.log('Promise' + i);

        }
    }
    setTimeout(function () {
        console.log('setTime');
    }, 1000);
    //return reject('Promise Error');
    return resolve('Promise END');
});

console.log('other');
console.log('other1');
console.log('other2');
console.log('other3');

p1.then(function (value) {
    console.log(value);
}).catch(function (err) {
    console.log(err);
});

console.log('other4');
console.log('other5');