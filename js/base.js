$(document).ready(function(){
    var cont = 1;
    $("#show-menu").on('click', function(){
        if(cont%1==0){
            $('.slide-nav').css({'width':'7%', 'transition':'all 1s'});
        }
        if(cont%2==0){
            $('.slide-nav').css({'width':'0%'});
        }
        cont = cont +1;
    });
});