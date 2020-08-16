((window, document) => {
    setRemUnit();

    window.addEventListener('resize', setRemUnit);

    function setRemUnit() {
        var docEl = document.documentElement,
            ratio = 18.75,
            viewWidth = docEl.getBoundingClientRect().width || window.innerWidth,
            maxWidth = 480,
            minWidth = 320;
        
        if (maxWidth && (viewWidth > maxWidth)) {
            viewWidth = maxWidth;
        } else if(minWidth && (viewWidth < minWidth)) {
            viewWidth = minWidth;
        }
        
        docEl.style.fontSize = viewWidth / ratio + 'px';
    }
})(window, document)