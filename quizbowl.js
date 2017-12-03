$(document).ready(function(){
    var val;
    var plu;
    $("nav").find("em").mouseup(function(e){
        e.stopPropagation();
        val = parseInt($(this).closest("div").find("span").text());
        plu = parseInt($(this).text());
        $(this).closest("div").find("span").html(val+plu);
        //Mostly appropriated from https://codepen.io/shivasurya/pen/FatiB
        $(this).closest("div").find("span").each(function () {
            $(this).closest("div").find("span").prop('Counter',val).animate({
                Counter: $(this).closest("div").find("span").text()
            }, {
                duration: Math.abs(45*plu),
                easing: 'swing',
                step: function (now) {
                    $(this).closest("div").find("span").text(Math.ceil(now));
                }
            });
        });
        val = val+plu;
        $(this).closest("div").css("border-color","#151515");
        $(this).closest("div").siblings().css("border-color","#151515");
        plu = parseInt($(this).closest("div").siblings().find("span").text());
        if(val>plu){
            $(this).closest("div").css("border-color","yellow");
        }else if(plu>val){
            $(this).closest("div").siblings().css("border-color","yellow");
        }
    });
})