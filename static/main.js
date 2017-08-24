define(function (require, exports) {
    require('./logo.js').init()
    require('./menu.js').init()
    require('./foot').init()

    var as = document.querySelectorAll('a'),
        divs = document.querySelectorAll('div'),
        len = divs.length;

    require('./show.js').show(as, divs)
    require('./hide.js').hide(as, divs)
})