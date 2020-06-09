function validate(){
        
     return  validateCredentials(redirect);
    }

function validateCredentials(redirect){

        var username = document.getElementById("uname");
        var password=document.getElementById("pwd");
        
        
        console.log(username);
        console.log(password);

        if(username.value.trim()=="" || password.value.trim() == "") 
        {
            alert("Please enter username and password");
            return false;    
        }

        if(username.value.trim()=="admin" && password.value.trim()=="12345")
        {
           redirect();
        }
        else{
            alert("Invalid user credentials");
            return false;
        }
    }

    function redirect(){
    
        window.location.href="display.html";
         return true;
     
     }
     