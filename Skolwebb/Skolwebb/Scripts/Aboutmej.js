//JavaScript source code
$(document).ready(function () {
    $("article.About").hide();
    $("article.Contacting").hide();
    $("article.Projects").hide();
});

var vad;
var hej;
var 
vad = 0;
hej = 0;
tal = 0;
function tra2div(tal, vad) {
    hej += tal;
    if (hej == 1 && vad == 1) {

        $("article.About").fadeIn(500);
        $("div.circleBase").animate({ margin: '-=7% 0px 0px 0px', height: '-=40px', width: '-=40px', borderWidth: '-=4px',backgroundSize: '-=30px' }, 1000);
       

        $.removeData(vad);
    }
    else if (hej == 0 && vad == -1) {
        $("article.About").fadeOut(500);
        $("div.circleBase").animate({ margin: '+=7% 0px 0px 0px', height: '+=40px', width: '+=40px', borderWidth: '+=4px',backgroundSize: '+=30px' }, 1000);
      
        $.removeData(vad);
    }
    //else if()
    //{
    //}
     

    
else if (hej >= 2) {
    hej = 1
}
else if (hej <= -1) {
    hej = 0
}
}
