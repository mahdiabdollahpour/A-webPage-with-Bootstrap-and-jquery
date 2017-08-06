$(document).ready(function(){
    $("#sendbtn").on("click",function(){
        var contact =  $("#contact");
        contact.find("textarea").each(function(ev)
                                      {
            
           
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

        contact.find("input[placeholder='Email Address']").each(function(ev)
                                                                {
            if($(this).val()=="") { 
                $("input[placeholder='Email Address'] + label").text("Please enter your Email Address");
            }else{
                $("input[placeholder='Email Address'] + label").text("");
            }
        });

        contact.find("input[placeholder='Phone Number']").each(function(ev)
                                                               {
            if($(this).val()=="") { 
                 $("input[placeholder='Phone Number'] + label").text("Please enter your Phone Number");
            }else{
                $("input[placeholder='Phone Number'] + label").text("");
            }
        });

    })



});
