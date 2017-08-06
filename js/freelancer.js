
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
    closebtn.on("click",function(){
        toggleFunc(popup,false);
        $("#myPopup").empty();
        setHandlers();

    });

    return closebtn;
}


setHandlers = function(){

    $(".popup").on("click",(function(event) {
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

                });
                var closeB = getClosrBtn(popup);
                div.append(data);
                $(popup).append(div);
                closeB.html("<i class='fa fa-times' aria-hidden='true'></i> Close");
                
                $(popup).append(closeB);
            }

        });
        toggleFunc(popup,toShow);
        $(".popup").off();
        console.log("toggled");
    }));

}



$(document).ready(function(){


    setHandlers();







});