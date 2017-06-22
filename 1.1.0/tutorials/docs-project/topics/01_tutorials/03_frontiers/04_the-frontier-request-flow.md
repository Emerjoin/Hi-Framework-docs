<!--Topic description-->
<description>Learn about handling frontiers events globally </description>


<diag style="width:700px;height:680px" src="assets/images/diagrams/svg/Frontier-call-flow.svg"></diag>




### $preFrontier
This is called everytime you invoke your frontier.

#### Before frontier method execution
```java
 public void preFrontier(@Observes FrontierRequestEvent args) throws InterruptedException {
        
        if(args.isAfter())
            return;
        
            Thread.sleep(0);


    }

```
TIP : you can use this spot to make your application slower in purprose. Just to test your loaders.

#### After frontier method execution
```java
public void preFrontier(@Observes FrontierRequestEvent args) {
        
        if(!args.isAfter())
            return;
        
        //Do whatever

    }

```


### $catch 
You may also handle all the errors of a frontier request.
```javascript
$frontiers:{
	catch : function(call,error){
	
			//handle errors here

        }
}

```

More detailed about that you can find here [Topic about Catching errors]

### $finally
```javascript
$frontiers:{
	finally : function(call){
	
		//handle errors here

	}
}

```
