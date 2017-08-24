define(function (require, exports) {
    function init(obj) {
        move(obj, { width: 200, height: 200 }, 600, 'linear',function(){
             window.isRefresh = true
        })
    }
    exports.init = init;
})
