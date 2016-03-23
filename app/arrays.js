exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove: function (arr, item) {
        return arr.filter(function (element) {
            return element !== item;
        });
    },

    removeWithoutCopy: function (arr, item) {
        //var removeWithoutCopyI = arr.findIndex(function (element,index) {
        //    if(element === item){
        //        return index;
        //    }
        //});
        while (arr.indexOf(item) !== -1) {
            arr.splice(arr.findIndex(function (element, index) {
                if (element === item) {
                    return index;
                }
            }), 1);
        }
        return arr;
    },

    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function (arr) {
        arr.shift();
        return arr;
    },

    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        newArr = []; // []
        var temp = arr[arr.length - 1];  // r last element
        for (var i = 0; i < arr.length; i++) {
            if (index !== i) {
                newArr.push(arr[i]);
            } else {
                var temp = arr[i];
                newArr[i] = item;
                newArr.push(temp);
            }
        }
        return newArr;
    },

    count: function (arr, item) {
        var count = 0;
        arr.forEach(function (ele) {
            if (ele === item) {
                count++;
            }
        });
        return count;
    },

    duplicates: function (arr) {
        arr.sort(function (a, b) {
            return a - b;
        });
        var count = 0;
        var kkk = arr.filter(function (element, index) {
            if (index === arr.length - 1) return;
            if (arr[index] === arr[index + 1] && count === 0) {
                count++;
                return element;
            } else {
                count = 0;
                return;
            }
        });
        return kkk;
    },

    square: function (arr) {
        return arr.map(function (currentValue) {
            return currentValue * currentValue;
        });
    },

    findAllOccurrences: function (arr, target) {
        var kkk = [];
        arr.forEach(function (element,index) {
            if(element === target){
                kkk.push(index);
            }
        });
        return kkk;
    }
};
