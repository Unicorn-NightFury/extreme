((window, document) => {

    // var docEl = document.documentElement,
    //     viewportEl = document.querySelector('meta[name="viewport"]'),
    //     dpr = window.devicePixelRatio || 1;

    // dpr = dpr >= 3 ? 3 : (dpr >=2 ? 2 : 1);
    // docEl.setAttribute('data-dpr', dpr);

    // var scale = 1/dpr,
    //     content = 


    setRemUnit();

    window.addEventListener('resize', setRemUnit);

    function setRemUnit() {
        var docEl = document.documentElement,
            ratio = 18.75,
            viewWidth = docEl.getBoundingClientRect().width || window.innerWidth,
            maxWidth = 540,
            minWidth = 320;
        
        if (maxWidth && (viewWidth > maxWidth)) {
            viewWidth = maxWidth;
        } else if(minWidth && (viewWidth < minWidth)) {
            viewWidth = minWidth;
        }
        
        docEl.style.fontSize = viewWidth / ratio + 'px';
    }
})(window, document)