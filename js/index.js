$(document).ready(function(){
    $("#myform").validate({
        rules: {
            password:{
                required:true
            },
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            password:{
                required:"Please enter your password"
            },
            email:{
                required:"Please enter your email"
            },
            submitHandler: subform
        }
    })
    function subform(){
    var data=$("#login_form").serialize();
    $.ajax({
        type:'POST',
        url:'call.go',
        data: data,
        beforeSend: function(){
            $("#info").fadeOut();
            $("#login").html("Please wait...");
        },
        success: function(resp){
            if(resp=="ok"){
                $("#login").html("<img src='img/ajax-loader.gif' width='15'/> &nbsp; Login");
                setTimeout('window.location.href= "dashboard.html";', 4000); //check
            }
            else{
                $("#info").fadeIn(1000, function(){
                    $("#info").html("<div class='alaert alert-danger'>"+resp+"</div>");
                    $("#login").html()
                })
            }
        }

    })
}

})