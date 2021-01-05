

    $(".show-slide").on("click",function(){
        $(".side").animate({
        marginLeft: "0"
        });
    });

    $(".hide-slide").click(function(){
        $(".side").animate({
            marginLeft: "-100%"
        });
    });

    $(".slike").slick();


    function link(url){
        setTimeout(function(){
            location.href = `${url}`
        },500)
    }

    $(window).on("load",function(){
        $(".load").fadeOut(function(){
            $(this).remove();
        });
    })




