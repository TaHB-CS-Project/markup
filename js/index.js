$(document).ready(function() { 
    $('#login_form').submit(function(event){
        event.preventDefault();
        var email=$("#email").val();
        var password=$("#password").val();
        var login_result= document.getElementById("login_result");

            $.ajax(  
                {
                    url:'http://127.0.0.1:8090/user1.go',    
                    type:"POST",   
                    dataType:"JSON", 
                    data: JSON.stringify({"Username": email, "Password_hash": password}),
                    success:function(response){  
                        login = JSON.stringify(response)
                        if(login == '{"Correctcredentials":true}'){
                            alert("Login Successful")
                            window.location = "dashboard.html";                    
                        }
                        else if(login == '{"Incorrectcredentials":false}'){
                            login_result.innerHTML = "<p>Your username or password is incorrect\nPlease try again</p>"
                        }
                        else{
                            alert("Unexpected Error")
                        }
                    },
                   
                }
            )
        }
    );

}); 
