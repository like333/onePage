define(function (require, exports) {
    function show(as, divs) {
        var firstHash = window.location.hash.substring(1) || 'index'

        for (var j = 0; j < divs.length; j++) {
            if (divs[j].dataset.hash == firstHash) {
                divs[j].style.display = 'block'
                switch (firstHash) {
                    case "index":
                        require('./indexIn.js').init(divs[j])
                        break
                    case "student":
                        require('./studentIn.js').init(divs[j])
                        break
                    case "message":
                        require('./messageIn.js').init(divs[j])
                        break
                }
            }
            else {
                divs[j].style.display = 'none'
            }
        }
    }
    exports.show = show;
})