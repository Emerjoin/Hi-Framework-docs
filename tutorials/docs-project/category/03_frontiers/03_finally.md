<!--Topic description-->
<description>Learn about the finally block on frontier calls</description>


### The java finally
The __finally__ block is used in Java to make sure a specific code block gets executed even when the enclosed __try-catch__ block throws an Exception.


### The frontiers finally
We borrowed the finally from the __java__ language and we brought it to the frontier calls, allowing you to specify a __function__ to be executed at last even when
something goes wrong with the call:

```js

     Frontier.example(arguments).try(function(result){
         
        //Handle success here
        
     }).catch(function(err)){
        
        //Handle errors here
           
     }).finally(function(){
        
        //You know what to do
     
     });       
```

We are done here. You already know how to specify a finally block.
