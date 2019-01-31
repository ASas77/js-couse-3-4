(function(){


    var Div = document.querySelector('div');
    var Img = document.querySelector('img');
    // var secondDiv = divs[1];


    var isBig = false;
    setInterval(function(){
        if (isBig){
            Div.className = "smallDiv"
            Img.className = "small"
        } else {
            Div.className = "bigDiv"
            Img.className = "big"
        }

        isBig = !isBig;
    }, 1000);
})();