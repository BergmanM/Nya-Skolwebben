//JavaScript source code
$(document).ready(function () {
    $("article.About").hide();
    $("article.Contacting").hide();
    $("article.Projects").hide();
    $("div.Menu").hide();
});
$(document).ready(function () {
    $("div.Menu").fadeIn(2000);
});
var nav;
var me;
var pro;
var con;
//var tal1;
//var tal2;
//var tal3;
//var tal4;
var hardrnav;
var hardA;
var hardP;
var hardC;
nav = 0;
me = 0;
pro = 0;
con = 0;
tal1 = 0;
tal2 = 0;
tal3 = 0;
tal4 = 0;
hardrnav = 0;
hardA = 0;
hardP = 0;
hardC = 0;
//function tra2div(tal, vad, ting, hardr)
function tra2div(tal1, hardrnav, hardA, hardP, hardC, tal2, tal3, tal4) {
    nav += tal1;
    me += tal2;
    pro += tal3;
    con += tal4;
    //NAV!!!!!!!!
    if (nav == 0 && hardrnav == -1) {
        $("div.circleBase").animate({ margin: '+=7% 0px 0px 0px', height: '+=40px', width: '+=40px', borderWidth: '+=4px', backgroundSize: '+=30px' }, 1000);
        $.removeData(hardrnav);
        $.removeData(hardA);
        $.removeData(hardP);
        $.removeData(hardC);
    }
    else if (nav == 1 && hardrnav == 1) {
        $("div.circleBase").animate({ margin: '-=7% 0px 0px 0px', height: '-=40px', width: '-=40px', borderWidth: '-=4px', backgroundSize: '-=30px' }, 1000);
        $.removeData(hardrnav);
        $.removeData(hardA);
        $.removeData(hardP);
        $.removeData(hardC);
    }



    //ARTICLES!!!!!
    //about
    if (me == 1 && hardA == 1) {
        $("article.About").fadeIn(500);
        $.removeData(hardA);
        $.removeData(hardP);
        $.removeData(hardC);
        $.removeData(hardrnav);
    }

    else if (me == 0 && hardA == -1) {
        $("article.About").fadeOut(500);
        $.removeData(hardA);
        $.removeData(hardP);
        $.removeData(hardC);
        $.removeData(hardrnav);
    }
        //about end
        // projects
    else if (pro == 1 && hardP == 1) {
        $("article.Projects").fadeIn(500);
        $.removeData(hardA);
        $.removeData(hardP);
        $.removeData(hardC);
        $.removeData(hardrnav);
    }
    else if (pro == 0 && hardP == -1) {
        $("article.Projects").fadeOut(500);
        $.removeData(hardA);
        $.removeData(hardP);
        $.removeData(hardC);
        $.removeData(hardrnav);
    }
        //project end
        //Contact

        //contact end



        //RESET!!!!!!!
    else if (nav >= 2) {
        nav = 1
    }
    else if (nav <= -1) {
        nav = 0
    }
    else if (me >= 2) {
        me  = 1
    }
    else if (me <= -1) {
        me = 0
    }
    else if (pro >= 2) {
        pro = 1
    }
    else if (pro <= -1) {
        pro = 0
    }
    else if (con >= 2) {
        con = 1
    }
    else if (con <= -1) {
        con = 0
    }








}
