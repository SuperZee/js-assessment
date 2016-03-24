'use strtic'
var fs = require('fs');

/**
 * 读取testdata目录下的5个文件的大小
 * 挑战 ：找出最大的那一个
 * */

function readFileSize(path) {
    return new Promise((resolve, reject) => {
        fs.stat(`../testdata/${path}`, function (err, stats) {
            if (err) return reject(err);
            return resolve(stats.size);
        });
    });
}
var arr = [1, 2, 3, 4, 5].map((i) => readFileSize(i + '.txt'));

Promise.all(arr)
    .then((value)=> {
        console.log(value);
    }).catch((err)=> {
    console.log(err);
});

//+