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

* Execution abortion (452)
* Execution timeout (408)
* Access denial (403)
* OverRequest (429)
* Java Exceptions (JSON object)

```js
    
//try
 .catch(function(err)){
	
	 if(err == 452){
            //Handle execution abortion error  
	 }
		
	 if(err == 408){
            //Handle execution timeout error
	 }
		
	 if(err == 403){
            //Handle access denial here
	 }
		
	 if(err == 429){
            //Handle overrequest here
	 }
		
	 if(typeof err == "object"){
            //Handle java exception here           
	 }
       
 });
```
You don't have to handle all this errors in a single __catch__ block if you don't want to. Frontiers allow you set __specific handlers__.

> **WARNING**<br> The __catch__ block will only handle errors for which __no specific handler__ was set.


### Execution abortion specific handler 
This handler will be fired if the frontier call HTTP request is interrupted by the client-side.

```js
    
    //try
    .interrupted(function(){
    
        //Handle execution interruption here
    
    }).catch(function(err)){
    
        //Handle other errors in here
       
    });

```

### Execution timeout specific handler
This handler will be fired if the frontier call HTTP request times out.

```js
    
    //try
    .timeout(function(){
    
        //Handle execution timeout here
    
    }).catch(function(err)){
    
        //Handle other errors in here
       
    });
```

### Access denial specific handler
This handler will be fired if the frontier call HTTP request results in a 403 response.

```js
    
    //try
    .forbidden(function(){
    
        //Handle access denial here
    
    }).catch(function(err)){
    
        //Handle other errors in here
       
    });
```

### OverRequest specific handler
This handler will be fired if the frontier call HTTP request results in a 429 response, which means that
the user is sending __too many__ requests.

```js
    
    //try
    .overrequest(function(){
    
        //Handle OverRequest here
    
    }).catch(function(err)){
    
        //Handle other errors in here
       
    });
```

### Using multiple error handlers in a single frontier call
We want to make it clear that you are completely __free__ to use multiple error handlers in one single frontier call as the following example demonstrates:

```js

    //try
    .timeout(function(){
    
        //Handle timeout here
    
    }).forbidden(function(){
    
        //Handle access denial here
    
    }).catch(function(err)){
    
         if(typeof err == "object"){
                                    
            //Handle java exceptions here
             
         }
       
    });  
    
```


### Catching Java Exceptions
Unlike other errors, Java Exceptions do not have a specific handler. They can only be handled in the __catch__ block as the following
example demonstrates:

```js

    //try
    .catch(function(err)){
    
         if(typeof err == "object"){
            
            var exceptionType = err.type; //Exception class name 
            var details = err.details; //Exception details   
                                    
            //Do whatever here
            
         }
       
    });  
    
```

> **WARNING**<br> The __err.details__ object __does not__ include the Exception's cause chain. It only includes the top level Exception's properties.

You are supposed to use this feature to handle business-level exceptions and not __IllegalArgumentException__ nor __NullPointerException__. Handling programming-level __Exceptions__ on frontier calls is considered a __bad practice__.









## Frontiers global error handlers
Hi-Framework allows you to define global error handlers for frontiers so that you can be able to handle errors __for all frontier calls__ in one single place.<br>
The __global error handlers__ for frontiers are defined in the __template controller__ under the __$frontiers object__ as the following snippet shows:

```javascript 
 
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
                   
           //Handle java exception here
                   
       }
           
   }
 
```
> **TIP**<br> The best way to catch exceptions globally is to set a message property on the frontier promise and have the global handler displaying it to the user. The global handler receives the promise as it's first argument: __call__.


```javascript

 Frontier.example(arguments).try(function (data) {
    
    //handle success here
    
 }).errorMessage = "Failed to achieve the goal"; //set message

```
The global handler would retrieve the error message this way:
```javascript
$frontiers : {

	catch : function(call,error){

		var errorMessage = call.errorMessage; //get message
		//do whatever you want with the message

	}
}	

```


### Precedence
What happens if you define error handlers on both __frontier call level__ and __template controller level__?

> **Handlers precedence**<br> The __frontier call level handlers__ take __precedence__ over __template controller level handlers__. 
The template controller level handlers are only fired when __no correspondent__ frontier call level handler was specified.

