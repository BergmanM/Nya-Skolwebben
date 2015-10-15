//JavaScript source code
$(document).ready(function () {
    $("article.About").hide();
    $("article.Contacting").hide();
    $("article.Projects").hide();
});

var vad;
var hej;
var ting;
var tal;
var hardr
vad = 0;
hej = 0;
tal1 = 0;
tal2 = 0;
tal3 = 0;
tal4 = 0;
ting = 0;
hardr = 0;
//function tra2div(tal, vad, ting, hardr)
function tra2div(tal1, hardr, tal2, tal3) {
    vad += tal1;
    hej += tal2;
    ting += tal3;
    //NAV!!!!!!!!
    if (vad == 0 && hardr == -1) {
        $("div.circleBase").animate({ margin: '+=7% 0px 0px 0px', height: '+=40px', width: '+=40px', borderWidth: '+=4px', backgroundSize: '+=30px' }, 1000);
        $.removeData(hardr);
    }
    else if (vad == 1 && hardr == 1) {
        $("div.circleBase").animate({ margin: '-=7% 0px 0px 0px', height: '-=40px', width: '-=40px', borderWidth: '-=4px', backgroundSize: '-=30px' }, 1000);
        $.removeData(hardr);
    }



    //ARTICLES!!!!1
    if (hej == 1 && hardr == 1) {
        $("article.About").fadeIn(500);
    }

    else if (hej == 0 && hardr == -1) {
        $("article.About").fadeOut(500);
        $("article.Projects").fadeOut(500);
    }
    else if (ting == 1 && hardr == 1) {
        $("article.Projects").fadeIn(500);
    }




        //RESET!!!!!!!

    else if (ting >= 2) {
        ting = 1
    }
    else if (ting <= -1) {
        ting = 0
    }

    else if (hej >= 2) {
        hej = 1
    }
    else if (hej <= -1) {
        hej = 0
    }
    else if (vad >= 2) {
        vad = 1
    }
    else if (vad <= -1) {
        vad = 0
    }
}
