<!--Topic description-->
<description>Learn about handling frontiers events globally </description>

Frontiers were created to allow developers to __post__ data __back__ to the server. A Frontier call is actually an __HTTP POST Request__ to the server with data to be processed.

In the diagram below, you can see exactly how the frontier call flow is :

<diag style="width:700px;height:680px" src="assets/images/diagrams/svg/Frontier-call-flow.svg"></diag>


## Assemble call request

Before firing an HTTP request to the server, Hi-Frameworks does the following:
* Create a jquery ajax request object
* Set http headers (CSRF protection and others)
* Format and set frontier call arguments on request object
* Apply simultaneous calls policy


### Simultaneous calls policy
Is the way Hi-framework gives you to configure its behavior regarding simultaneous calls of a specific frontier method.
Learn more about it [here](category/frontiers/simultaneous-calls-policy.html).


### FrontierRequestEvent
This event is fired twice during a frontier method invocation : __before__ and __after__ the __method execution__.

#### __Before frontier method execution__
If you wish do define some general behavior before a __frontier method execution__, you just have to check the __isAfter()__ boolean method of the __FrontierRequestEvent__ instance.

See an example below :

```java
 public void preFrontier(@Observes FrontierRequestEvent event){
        
    if(!event.isAfter())
       //This is before the frontier call

 }

```
> **TIP**<br> Use this event while developing your app to willingly make it slower by invoking  __Thread.sleep(milliseconds)__. It will help you simulate a __bad response time__ scenario.

#### __After frontier method execution__

If you wish to define some behavior for after your frontier is called, this is the place. You just have to check the __isAfter()__ boolean method of the __FrontierRequestEvent__ instance.

```java
public void postFrontier(@Observes FrontierRequestEvent event) {
        
     if(event.isAfter())
        //This is after the frontier call

}

```


### Handling errors 
If your frontier request fails for some reason, you have a way of handling the errors both on the __call__ and __globally__.
If you read the [Getting started]($gettingStartedBasePath/post-back.html#handling-frontier-call-errors) section (If, you didn't, please do), you probably know by now how to handle errors in the call. 

This topic will only explain how you can handle them globally.

#### Handling frontier request errors globally
To achieve this goal, you will have to set a __catch__ callback function for the __$frontiers__ object in your template controller.

See an example below : 

```javascript
$frontiers : {

    catch : function(call,error){
	
       //handle errors here

    }
    
}

```

If you need to learn more about handling frontier errors, please read the tutorial : [Catching errors on frontiers](category/frontiers/catching-errors.html).


### Finally Block

The same way the __finally block__ is used in __Java__ to make sure a specific code block gets __executed__ even when the enclosed __try-catch__ block throws an Exception, Hi-Framework uses it for Frontier requests. The Finally block on a frontier call can work both on the __call__ and __globally__.

#### Global handler for Frontier finally

```javascript
$frontiers : {
    
    finally : function(call){

        //handle errors here

    }
	
}

```

If you want to know how frontier's finally block works on a frontier call, please read : [Frontiers finally block](category/frontiers/finally.html)