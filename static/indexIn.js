define(function (require, exports) {
    function init(obj) {
        move(obj,{width:300,height:400},600,'linear',function(){
            window.isRefresh = true
        })
    }
    exports.init = init;
})
