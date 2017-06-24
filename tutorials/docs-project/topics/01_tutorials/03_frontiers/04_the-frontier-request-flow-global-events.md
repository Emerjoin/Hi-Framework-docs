<!--Topic description-->
<description>Learn about handling frontiers events globally </description>

Frontiers where created to allow developers to __post__ data __back__ to the server. A Frontier call is actually an __HTTP POST__ Request back to the server with data to be processed.

In the diagram below, you can see exactly how the frontier flow is :

<diag style="width:700px;height:680px" src="assets/images/diagrams/svg/Frontier-call-flow.svg"></diag>


## Assemble call request

Before making the request to the server, frontiers have to face a decision of weather to allow or not __multiple frontier calls__ simultaneously.

#### __Default behavior__

By default Hi-Framework __forbids__ simultaneous frontier calls. The reason behind this choice is the fact that ....
this approach protects your application from __XXX__ vulnerability. 


#### __Allowing multiple frontier calls simultaneously__
If you have a special need and you feel like you really need frontiers to not __forbid__ this, you can allow it by setting __multiple-frontier-invocation__ to __true__ in your __hi.xml__ file.

```xml
<multiple-frontier-invocation>true</multiple-frontier-invocation>
```



### FrontierRequestEvent
This is event is fired twice within a frontier method invocation : __before__ and __after__ the __method execution__.

#### __Before frontier method execution__
If you wish do define some general behavior before a __frontier method execution__, you just have to check the __FrontierRequestEvent__'s __isAfter()__ boolean method.

See an example below :

```java
 public void preFrontier(@Observes FrontierRequestEvent event){
        
        if(!args.isAfter())
            return;
			
			//Do Whatever here

    }

```
> **TIP**<br> Use this event while developing your app to willingly make it slower by making your  __Thread.sleep(milliseconds)__. It will help you simulate a __bad response time__ scenario.

#### __After frontier method execution__

If you wish to define some behavior for after your frontier is called, this is the place. Just check the __boolean__ for __isAfter()__ on your __FrontierRequestEvent__ argument.

```java
public void postFrontier(@Observes FrontierRequestEvent args) {
        
        if(args.isAfter())
            return;
        
        //Do whatever

    }

```


### Handling errors 
If your frontier request fails for some reason, you have a way of handling the errors both in the __call__ and __globally__.
If you read the __Getting started__ section (If, you didn't, please do), you probably know by now how to handle errors in the call. 

This topic will only explain how you can handle them globally.

#### Handling frontier request errors globally
To achieve this goal, you will have to set a __catch__ callback function for the __$frontiers__ object in your template controller.

See an example below : 

```javascript
$frontiers:{
	catch : function(call,error){
	
			//handle errors here

        }
}

```

If you need to learn more about handling frontier errors, please read the tutorial : __Catching errors on frontiers__.


### Finally Block

The same way the __finally block__ is used in __Java__ to make sure a specific code block gets __executed__ even when the enclosed __try-catch__ block throws an Exception, Hi-Framework uses it for Frontier requests. The Finally block on a frontier call can work both in the __call__ and __globally__.

#### Global handler for Frontier finally

```javascript
$frontiers:{
	finally : function(call){
	
		//handle errors here

	}
}

```

If you want to know how frontier's finally block works on a call, please read : __Frontiers finally block__