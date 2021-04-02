$(document).ready(function() { 
    console.log('page ready');
    $('#btn_login').on('click',function(){
        var email=$("#email").val();
        var password=$("#password").val();
        
        if (email==""||password=="")
            alert('Please write down your email and password');
        else{
            $.ajax(
                {
                    url:'user.go',
                    method:'GET',
                    data:{
                        login:1, //key to check in the code
                        username: email,
                        password_hash: password
                    },
                    success:function(response){
                        window.location='dashboard.html';
                    },
                    dataType:"text"
                }
            )
        }
    });

}); 

