$(document).ready(function(){
    $("#myform").validate({
        rules: {
            "email":{
                "required":true,
                "email":true
            },
            "password":{
                "required":true
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
        url:'call.go'+'?rand=' +newDate().getTime(),
        async:true,
        dataType:"json",
        data:{
            email: $(`#email`).val(),
            password: $(`#password`).val()
        },
        beforeSend: function(){
            $("#info").fadeOut();
            $("#login").html("Please wait...");
        },
        success: function(jsonData){
            if(jsonData.hasErrors){
                displayErrors(jasonData.errors);
            }
            else{
               alert(jsonData.confirm);
               //add code here
               displayLogin();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $('#error').html(XMLHttpRequest.responseText).removeClass('hide').fadeIn('slow');

        }
    });
}
function displayErrors(errors) {
	str_errors = '<p><strong>' + (errors.length > 1 ? more_errors : one_error) + '</strong></p><ol>';
	for (var error in errors) 
		if (error != 'indexOf') str_errors += '<li>' + errors[error] + '</li>';
	$('#error').html(str_errors + '</ol>').removeClass('hide').fadeIn('slow');
}
})