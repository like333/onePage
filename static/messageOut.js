define(function(require,exports){
    function init(as,divs,hash){
        for(var i=0;i<as.length;i++){
            if(divs[i].dataset.hash == 'message'){
                move(divs[i],{width:0,height:0},600,'linear',function(){
                    window.location.hash = hash
                    require('./show.js').show(as,divs)
                    isRefresh = true
                })
            }
        }
    }
    exports.init = init;
})
