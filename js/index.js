$(document).ready(function() { 
    console.log('page ready');
    $('#btn_login').on('click',function(){
        event.preventDefault();
        var email=$("#email").val();
        console.log(email);
        var password=$("#password").val();
        console.log(password);    

        if (email==""||password=="")
            alert('Please write down your email and password');
        else{
     
            $.ajax(  
                {
                    url:'http://127.0.0.1:8090/user1.go',   
                    req: 'signin', 
                    type:"POST",   
                    dataType:"JSON", 
                    data: JSON.stringify({Username: email, Password_hash: password}),
                    
                  
                    success:function(response){
                        console.log(Response);
                        login = JSON.stringify(response)
                        if(login == '{"Correctcredentials":true}'){
                            Swal.fire({
                                icon: 'success',
                                title: 'Welcome!',
                              
                                
                            });
                         
                            window.location = "dashboard.html";                
                        }
                        else if(login == '{"Incorrectcredentials":false}'){
                            Swal.fire({
                                icon: 'error',
                                title: 'Invalid Username or Password',
                                text: 'Please try again'
                            });
                            return;
                        }
                        else{
                            alert("Unexpected Error")
                        }


                }

                   
                }
            )
        }
    });

}); 




