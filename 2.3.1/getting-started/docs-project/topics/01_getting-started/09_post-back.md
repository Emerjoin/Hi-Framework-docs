<!--Topic description-->
<description>Let's now learn how to post back to server</description>



> **Post back**<br>Is the act of __POSTING__  data __BACK__ to the server for __processing__.<br> Putting it differently: It's an HTTP POST Request back to the server with data to be processed.

## Introducing Frontiers
You are lost right? What does __frontiers__ has to deal with __post back__? In Hi-Framework, you use __Frontiers__ to post back.

> **Frontiers**<br>CDI Managed beans annotated with __@Frontier__, with public methods that can be called from client-side, statically.


### Frontier class example
Let us show you some frontier example:



``` java 

    @Frontier //Required
    @ApplicationScoped //This is the most convenient CDI scope
    public class Cars{  
    
        public long save(Car car){
            
            //Save and return car Id
        
        }
        
        public Car getDetails(long carId){
            
            //Get car record from storage
            
        }
        
    }
    
```

Any of the __public methods__ of the frontier class we just created can be called from __client-side__, statically. 
You can call the methods from the view controller or from whatever __script__ you want.They are __static methods__.


### Simple frontier call example

So, how do we call a frontier method?


```js
    
   var car = { brand:"Toyota", model:"Vitz" };
    
   //Call the frontier method
   Cars.save(car).try(function(carId){
      
       console.log("Car id is "+carId);
      
   });


```

### Handling frontier call errors

We have already seen how to call the frontier method, now we will show you how to catch errors:

```js

   var car = { brand:"Toyota", model:"Vitz" };

   //Call the frontier method
   Cars.save(car).try(function(carId){
           
       console.log("Car id is "+carId);
           
   }).catch(function(err){//Handle errors
            
       console.error("Failed to persist car");   
      
   });
    
```

Piece of cake right? There is nothing hard about frontiers. 

> **Why use frontiers instead of direct ajax requests?**<br><br>We have been there and done that and we concluded __direct ajax requests__ aren't a big deal. <br>Frontiers give you __out-of-the-box CSRF protection__ and also
> a convenient way to __mock back-end__ when testing the client-side, plus the syntax which we believe to be clean, as you pass the same parameters
> you specified in your __Java__ classes.<br><br> The __JSON__ objects you pass as arguments in your __JavaScript__ code, are automatically converted into __Java__ compatible objects.<br> Frontiers will also very soon offer you parameters hints (via your IDE) when calling a method, considering the parameters name
> API introduced in __Java 8__.
