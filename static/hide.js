define(function (require, exports) {
    function hide(as, divs) {
        for (var i = 0; i < as.length; i++) {
            as[i].addEventListener('click', function () {
                isRefresh = false
                var hash = this.dataset.hash
                // window.location.hash = hash;
                var wHash = window.location.hash.substring(1) || 'index';
                switch (wHash) {
                    case 'index':
                        require('./indexOut.js').init(as,divs,hash)
                        break
                    case 'student':
                        require('./studentOut.js').init(as,divs,hash)
                        break
                    case 'message':
                        require('./messageOut.js').init(as,divs,hash)
                        break
                }
            })
        }
    }

    exports.hide = hide;
})