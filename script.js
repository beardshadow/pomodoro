$(document).ready(function(){
	var run = true;
    $("#start").click(function(){
        if (run){
            var p = $("p");
            var val = $("p").text();
            window.interval = setInterval(function(){
                p.text(--val);
                if (val === 0)
                    clearInterval(window.interval);
            }, 1000);
        }
    });
    
    $("#set").click(function(){
        window.clearInterval(window.interval);
        var p = prompt("set timer to:", 30);
        $("p").text(p);
    });
    $("#stop").click(function(){
        window.clearInterval(window.interval);
    });
});
