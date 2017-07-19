$(function() {
    //globals
    var id = true;
    var p = $('p');
    var val = $('p').text();

    $('#start').click(countdown);
    $('#stop').click(stopCountdown);
    $('#set').click(setCountdown);

    //counting functions
    function countdown(){
        if (id === true) {
            id = setInterval(counting, 1000);
        };
    }

    function counting(){
        if (val === 0){
            clearInterval(id);
        }else{
            p.text(--val);
        }
    }

    function stopCountdown(){
        clearInterval(id);
        id = true;
    }

    function setCountdown(){
        clearInterval(id)
        id = true
        val = prompt("set timer to:", 30);
        p.text(val);
    }
});

// need to add code to stop counter if it starts at '0', currently it
// will start counting into negative if start is pressed with counter set
// at '0'