<!--Topic description-->
<description>Learn how to use bean validation with frontiers</description>


## Bean validation
Bean validation is a validation API based in annotations, specified as the __JSR 303__.<br>
You can read more about it [here](http://beanvalidation.org/).<br>

Hi-Framework considers the use of bean validation on frontier methods arguments, as the following example shows:

```java

    
    @ApplicationScoped
    @Frontier
    public class Example{
       
        //This frontier method uses bean validation
        public boolean doMagic(@Email @NotNull String email, @Min(1) int age){
            
            //some magic happens in here
        
        }  
    
    }

```

There is nothing special about the use of bean validation on frontier methods, except the way you handle validation errors back on frontier calls.

### Handling bean validation errors on frontiers calls
Let us show you how to handle bean validation errors that occur on frontier calls:

```js

     Frontier.example(arguments).try(function(result){
         
        //Handle success here
        
     }).catch(function(err)){
        
         if(typeof err == "object"){
                
             var exceptionType = err.type; //Exception's class name 
             var details = err.details; //Exception JSON object    
                
             if(exceptionType == "ConstraintViolationException"){
				
				 
                 var messages = details.messages;//The error messages array
				 
                 //do whatever you want with them
              
             }                 
          }
           
     });       
```




