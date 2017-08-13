

var toggleFunc = function(popup,toShow){
    popup.classList.toggle("show");
    if(toShow){


    }
}
var setHandlers=null;
var getClosrBtn = function(popup){
    var closebtn = jQuery('<button/>',{
        class:"btn",
        id:"close-btn",  
    });
    function closeFunc() {
        toggleFunc(popup,false);
        //        $("#myPopup").empty();
        $('img',popup).remove();
        $('#close-btn',popup).remove();
        $('#text-div',popup).remove();
        setHandlers();
    }
    closebtn.on("click",closeFunc);
    $("#close-icon").off();
    $("#close-icon").on("click",closeFunc);
    return closebtn;
}


setHandlers = function(){

    var clickHandler = function(event) {
        var popup = document.getElementById("myPopup");
        // var popup = event.currentTarget;
        var toShow;
        if($("#myPopup").is(':empty')){
            toShow = true;
            console.log("setting to show to true");

        }else{
            toShow = false;
            console.log("setting to show to false");
        }

        jQuery('<img/>', {
            id:"poped-img",
            src: $(event.currentTarget).find("img").attr("src"),
        }).appendTo(popup);

        $.ajax({
            url : "cabin.html",
            dataType: "html",
            success : function (data) {

                var div = jQuery('<div/>',{
                    id:"text-div",
                });
                var closeB = getClosrBtn(popup);
                div.append(data);
                $(popup).append(div);
                closeB.html("<i class='fa fa-times' aria-hidden='true'></i> Close");

                $(popup).append(closeB);
            }

        });
        toggleFunc(popup,toShow);
        ///////
        $(".popup").unbind("click");
        ////////
        console.log("toggled");
    };


    $(".popup").on("click",clickHandler);

}

var setHoverEvent = function (){

    $(".port-img-con").on("mouseenter",function(){
        $(this).css("background-color","#18bc9c");
        $(this).find("img").css("opacity","0.2");
        $(this).find(".mag").css("visibility","visible");

        console.log("hided");


    }); 
    var showFunc= function(){
        $(this).css("background-color","white");
        $(this).find("img").css("opacity","1");
        $(this).find(".mag").css("visibility","hidden");
        console.log("showing")}


    $(".port-img-con").on("mouseleave",showFunc);
    //    $(".port-img-con").mouseout(showFunc);






}


$(document).ready(function(){


    setHandlers();
    setHoverEvent();
    $("#navbarSupportedContent").on("show.bs.collapse",function(){
        $(".navbar-toggler-icon").css("background-color","#18bc9c");

    });
    $("#navbarSupportedContent").on("hidden.bs.collapse",function(){


        $(".navbar-toggler-icon").css("background-color","#2c3e50");
    });

    //    $(".nav-item").mouseenter(function(event){
    //
    //        console.log("im in");
    //        if($("#menu").is(":visible")){
    //
    //            console.log("back : green");
    //            $(event.currentTarget).css("background-color","#18bc9c");
    //            $(event.currentTarget).find(".nav-link").css("color","white");
    //
    //
    //        }else{
    //            console.log("back : black");
    //            $(event.currentTarget).css("background-color","#2c3e50");
    //            $(event.currentTarget).find(".nav-link").css("color","#18bc9c");
    //        }
    //
    //
    //
    //    });
    //    $(".nav-item").mouseleave(function(event){
    //
    //        console.log("reseting");
    //        $(event.currentTarget).css("background-color","#2c3e50");
    //        $(event.currentTarget).find(".nav-link").css("color","white");
    //
    //    });
    //



    var sections = $('.sections');
    var nav = $('nav');
    var nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height;
            var bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {


                nav.find('.nav-item').removeClass('active');
                sections.removeClass('actived');

                $(this).addClass('actived');
                nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');

            }else{

                $(this).removeClass('actived');
                nav.find('a[href="#'+$(this).attr('id')+'"]').parent().removeClass('active');
            }
        });
    });

});



