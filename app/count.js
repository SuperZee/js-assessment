exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        return () => {
            for (var i = start; i <= end; i++) {
                setTimeout(function () {

                }, 100);
            }
        }
    }
};
