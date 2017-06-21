<!--Topic description-->
<description>How to catch errors on frontier calls, including java Exceptions</description>


## The basic frontier call block
Let's refresh our minds about how to perform a basic frontier call:

```js
Frontier.example(arguments).try(function(result){

    //Handle success here

}).catch(function(err){

    //Handle errors here

});
```

The frontier call above uses the __catch__ block to handle any possible error during the frontier call. Let's be more specific about the errors that will be handled by the __catch__ block:

* Execution abortion
* Execution timeout
* Access denial (HTTP 403)
* OverRequest (HTTP 429)
* Java Exceptions

You don't have to handle all the possible errors in one place if you don't want to. Frontiers allow you specify specific handlers.

> **WARNING**<br> The __catch__ block will only handle errors for which __no specific handler__ was set.


### Execution abortion specific handler 
This handler will be fired if the frontier call HTTP request is interrupted by the client-side.

```js
    
    Frontier.example(arguments).try(function(result){
    
        //Handle success here
    
    }).interrupted(function(){
    
        //Handle execution interruption here
    
    }).catch(function(err)){
    
        //Handle other errors in here
       
    });

```

### Execution timeout specific handler
This handler will be fired if the frontier call HTTP request times out.

```js
    
    Frontier.example(arguments).try(function(result){
    
        //Handle success here
    
    }).timeout(function(){
    
        //Handle execution timeout here
    
    }).catch(function(err)){
    
        //Handle other errors in here
       
    });
```

### Access denial specific handler
This handler will be fired if the frontier call HTTP request results in a 403 response.

```js
    
    Frontier.example(arguments).try(function(result){
    
        //Handle success here
    
    }).forbidden(function(){
    
        //Handle access denial here
    
    }).catch(function(err)){
    
        //Handle other errors in here
       
    });
```

### OverRequest specific handler
This handler will be fired if the frontier call HTTP request results in a 429 response, which means that
the user is sending __too many__ requests.

```js
    
    Frontier.example(arguments).try(function(result){
    
        //Handle success here
    
    }).overrequest(function(){
    
        //Handle OverRequest here
    
    }).catch(function(err)){
    
        //Handle other errors in here
       
    });
```

### Catching Java Exceptions
Unlike other errors, Java Exceptions do not have a specific handler. They can only be handled in the __catch__ block as the following
example demonstrates:

```js

    Frontier.example(arguments).try(function(result){
    
        //Handle success here
    
    }).catch(function(err)){
    
         if(typeof err == "object"){
            
            var exceptionType = err.type; //Exception class name 
            var details = err.details; //Exception JSON object    
                                    
            //Handle java exception here
            
         }
       
    });  
    
```

> **WARNING**<br> The __err.details__ object __does not__ include the Exception's cause chain. It only includes the top level Exception's properties.

You are supposed to be using this feature to handle business-level exceptions and not __IllegalArgumentException__ or __NullPointerException__. Handling programming-level __Exceptions__ on frontier calls is considered a __bad practice__.




### Using multiple error handlers in a single frontier calls
We want to make it clear that you completely free to use multiple error handlers in one single frontier call as the following example demonstrates:

```js

    Frontier.example(arguments).try(function(result){
    
        //Handle success here
    
    }).timeout(function(){
    
        //Handle timeout here
    
    }).forbidden(function(){
    
        //Handle access denial here
    
    }).catch(function(err)){
    
         if(typeof err == "object"){
            
            var exceptionType = err.type; //Exception class name 
            var details = err.details; //Exception JSON object    
                                    
            //Handle java exception here
            return;
            
         }
         
         
         //Handle other errors here
       
    });  
    
```




## Frontiers global error handlers
Hi-Framework allows you to define global error handlers for frontiers so that you can be able to handle errors for all frontier calls in one single place.<br>
The __global frontiers error handlers__ are define on the __template controller__ under the __$frontiers object__ and the following snippet shows:

```  
   Hi.template({
  
       $frontiers : {
       
          //global error handlers are declared in here
       
       } 
   
   }); 
  
```

### Access denial global handler

```  
  
   forbidden : function(call){
           
       //Handle access denial for all frontier calls
           
   }
  
```


### Execution timeout global handler

```  
  
   overrequest : function(call){
           
       //Handle execution timeout for all frontier calls
           
   }
  
```


### OverRequest global error handler

```  
  
   timeout : function(call){
           
       //Handle OverRequest for all frontier calls
           
   }
  
```

### Execution interruption global handler

```  
  
   interrupted : function(call){
           
       //Handle execution interruption for all frontier calls
           
   }
  
```

### The global catch error handler

```  
  
   catch : function(call,err){
           
       if(typeof err == "object"){
                   
           var exceptionType = err.type; //Exception class name 
           var details = err.details; //Exception JSON object    
                                           
           //Handle java exception here
                   
       }
           
   }
 
```


### Precedence
What happens when you define error handlers on frontier call level and on the template controller level?

> **Handlers precedence**<br> The frontier __call level__ handlers take __precedence__ over controller level handlers and the controller level handlers are only fired when __no correspondent__ call level handler is specified.

