$(document).ready(function(){
    var val;
    var plu;
    $("nav").find("em").mouseup(function(){
        val = parseInt($(this).closest("div").find("span").text());
        plu = parseInt($(this).text());
        $(this).closest("div").find("span").text(val+plu);
    });
})