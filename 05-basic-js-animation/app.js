(function(){
    var div = document.querySelector('div');
    
    var initTop = 75;
    var initLeft = 0;
    var step = 3;

    var isBack = false;

    setTimeout(function() {
        clearInterval(intervalId);
        myFunc();
    }, 7000);

    var intervalId = setInterval(function myFunc () {
        if (initTop >= 0 && initLeft < 100 && !isBack){
            initTop = initTop - step;
            initLeft = initLeft + step;
        } else  {
            isBack = true;
            if (initTop <= 75 && initLeft >= 0) {
                initTop = initTop + step;
                initLeft = initLeft - step;
            }
            else
            {
                isBack = false;
            }
        }
        //clearInterval(intervalId);

        div.style.top = initTop + "%"
        div.style.left = initLeft + "%"

    }, 100);
})()