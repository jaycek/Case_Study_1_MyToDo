$(document).ready(function(){


    $("#list").click(function(){
      
      var httpRequest   = new XMLHttpRequest();
      
      if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = function(){
    
          try {
              if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                  
                  displaylist(httpRequest.responseText);
    
                } else {
                  alert('There was a problem with the request.');
                }
              }
            }
            catch( e ) {
               alert('Caught Exception: ' + e.description);
            }
      };
    
      try{
        httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos',true);
        httpRequest.send();
      }
      catch(e){
        alert('Caught exception: ' + e.description)
      }
                
    
    });
    
    $("#logout").click(function(){
      window.location.href="index.html";
    });
    
    
    function displaylist(data){
    
      var list = JSON.parse(data);
      console.log(list);
    
         
    var records = '';

      $.each(list,function(key,value) {
     
                   
          records+='<tr class="table-info">';
          records+='<td>' + value.id + '</td>';
          records+='<td>' + value.title + '</td>';
          records+='<td>';

         if(value.completed == false){
             records+='<input type="checkbox" id="status" class="checkbox"> ';
         }
         else
         {
            records+='<input type="checkbox" checked disabled>';
         }
          records+='</td>';
          records+='</tr>';
                              
        
      });
       
      $("#todotable").append(records);
    
    }
    
   
    function checkCounter(){   
    
        let promise= new Promise(function(resolve,reject){
        if(count==5){
            resolve("Congrats:You have completed 5 tasks.")
        }
        })
    
    promise.then(function(s){
        alert(s);
    });
}

var count = 0;

$(document).on('change','.checkbox', function() {
    if(this.checked) {
        count++;
        alert(count);
        checkCounter();
    }
    else{
        count--;
    }
});
    


    });
   