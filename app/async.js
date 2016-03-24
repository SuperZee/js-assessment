exports = (typeof window === 'undefined') ? global : window;
exports.asyncAnswers = {
    async: function (value) {
        //value true
        //console.log('Promise found');
        return new Promise((resolve, reject)=> {
            //异步操作
            if (value) {
                resolve(value);
            } else {
                reject(value);
            }
        });
    },

    manipulateRemoteData: function (url) {
        return url;
    }
};

//// 创建一个Promise对象
//var promise = new Promise(function (resolve, reject) {
//    // 异步处理
//    // 处理结束调用resolve或reject
//});
//promise.then(onFulfilled, onRejected)
//{
//    // 成功时候onFulfilled调用
//    // 失败时候onRejected调用
//    // onFulfilled 、 onRejected 两个都为可选参数
//}
//// 处理异常的方法，通过then(undefinded,onRejected)也可以捕获异常
//promise.catch(onRejected)
//{
//
//}
