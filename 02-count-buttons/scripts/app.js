(function(){

    var labelFirst = document.querySelector('#label-first');
    var firstButton = document.querySelector('#btn-first');

    var labelSecond = document.querySelector('#label-second');
    var secondButton = document.querySelector('#btn-second');
    var countSecond =0;

    var firstButtonMinus = document.querySelector('#btn-firstMinus');

    var secondButtonMinus = document.querySelector('#btn-secondMinus');

    firstButton.addEventListener('click', function(){
        countFirst++;
        alert('first  '+ countFirst)
    })

    secondButton.addEventListener('click', function(){
        countSecond++;
        alert('second  '+ countSecond)
    })
    firstButtonMinus.addEventListener('click', function(){
        countFirst--;
        alert('first  '+ countFirst)
    })
    secondButtonMinus.addEventListener('click', function(){
        countSecond--;
        alert('first  '+ countSecond)
    })

    secondButton.addEventListener('click', function(e){
        alert('second')
    });
})()