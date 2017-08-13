function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
var notValidMessage = "Email Address is not valid";
$(document).ready(function(){
    var warned = false;
    $("input[placeholder='Email Address']").keydown(function(){
        var label= $("input[placeholder='Email Address'] + label");
        var inputVal = $(this).val();
        console.log("inputVal"+inputVal);
        if(!inputVal == "") {
            if(!isEmail(inputVal)){
                console.log("Labelvalue"+$("input[placeholder='Email Address'] + label").val());
                console.log("not valid");
                if(!warned){
                    label.text(notValidMessage);
                    warned = true;
                }
            }else{
                label.text("Email address is valid");
                warned = false;
            }   
        } else{
            label.text("");
            warned = false;
        }
    });

    $("#sendbtn").on("click",function(){
        var contact =  $("#contact");
        contact.find("textarea").each(function(ev) {
            if($(this).val()=="") { 
                $("textarea + label").text("Please enter a message");
            }else{
                $("textarea + label").text("");
            }
        });
        contact.find("input[placeholder=Name]").each(function(ev)
                                                     {
            if($(this).val()=="") { 
                $("input[placeholder=Name] + label").text("Please enter your name");
            }else{
                $("input[placeholder=Name] + label").text("");
            }
        });
        contact.find("input[placeholder='Email Address']").each(function(ev){
            if($(this).val()=="") { 
                $("input[placeholder='Email Address'] + label").text("Please enter your Email Address");
            }else{

                $("input[placeholder='Email Address'] + label").text("");
            }
        });
        contact.find("input[placeholder='Phone Number']").each(function(ev)  {
            if($(this).val()=="") { 
                $("input[placeholder='Phone Number'] + label").text("Please enter your Phone Number");
            }else{
                $("input[placeholder='Phone Number'] + label").text("");
            }
        });
    }); 
});
