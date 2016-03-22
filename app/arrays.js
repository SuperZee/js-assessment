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
        while( arr.indexOf(item) !== -1){
            arr.splice(arr.findIndex(function (element ,index) {
                if(element === item){
                    return index;
                }
            }),1);
        }
        return arr;
    },

    append: function (arr, item) {

    },

    truncate: function (arr) {

    },

    prepend: function (arr, item) {

    },

    curtail: function (arr) {

    },

    concat: function (arr1, arr2) {

    },

    insert: function (arr, item, index) {

    },

    count: function (arr, item) {

    },

    duplicates: function (arr) {

    },

    square: function (arr) {

    },

    findAllOccurrences: function (arr, target) {

    }
};
