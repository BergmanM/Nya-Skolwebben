// JavaScript source code
$(document).ready(function () {
    $("article").hide();
});
$(document).ready(function () {
    $("body").hide();
});
$(document).ready(function () {
    $("body").fadeIn(2000);
});
var vad;
vad = 0;
var hej;
hej = 0;
tal = 0;
function tra2div(tal,vad) {
    hej += tal;
    if (hej == 1 && vad == 1) {
        $("div#whitewrapper").animate({ height: '+=490px' }, 1000);
        $("article").fadeIn(1000);
        $("footer").animate({ height: '-=490px' }, 1000);
        $.removeData(vad);
    }
    else if (hej == 0 && vad == -1) {
        $("article").fadeOut(1000);
        $("div#whitewrapper").animate({ height: '-=490px' }, 1000);
        $("footer").animate({ height: '+=490px' }, 1000);
        $.removeData(vad);
    }
    else if(hej >=2)
    {
        hej=1
    }
    else if(hej <= -1)
    {
        hej=0
    }
}





