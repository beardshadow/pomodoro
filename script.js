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
        p.text(--val);
        if (val === 0)
            clearInterval(id);
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