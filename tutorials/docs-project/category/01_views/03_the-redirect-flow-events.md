<!--Topic description-->
<description>Understand about the redirect flow and how to handle it's events</description>

Redirecting is changing the route you're currently in. Hi-Framework is based on the __MVC pattern__, what means that __route endpoints__ are controller __actions__ and actions themselves are responsible for calling the __view__ to be displayed.

In the diagram below, we represent the whole redirecting flow, from __client__ to __server-side__ and __back to client-side__.

<diag style="width:670px;height:680px" src="assets/images/diagrams/svg/Redirect-flow.svg"></diag>


## onRedirectStart

The redirect process will __mostly__ begin on the __client-side__ when the end-user clicks on an element with the __ajaxify__ attribute or in some way invokes the __Hi.redirect__ method.

When the act of redirecting begins, the method __$onRedirectStart__ on the __template controller__ is fired.

```javascript
	$onRedirectStart : function(route){

            //Do something

	}
```

> **TIP**<br> Use this event to display your redirecting loader. You will later have to hide it when the redirect process ends.

> **NOTICE**<br> The __$onRedirectStart__ method receives one argument which is the route to which the user is being redirected.

## ControllerRequestEvent
This event is what allows you to know every time a user accesses an action. This event will be fired twice in order to track two different moments : __before__ and __after__ the action method execution.

### Before action execution

To track this moment, you just have to make sure the boolean in __isAfter()__ is __false__.

```java
 public void preAction(@Observes ControllerRequestEvent args) {
       
       
        if(!args.isAfter())
            //This is before the action method is invoked
            
            
}
```
> **TIP**<br> Use this event while developing your app to willingly make it slower using  __Thread.sleep__. It will help you simulate a __bad response time__ scenario.

### After action execution
To track this moment, you just have to make sure the boolean in __isAfter()__ is __true__.

```java
 public void postAction(@Observes ControllerRequestEvent args) {
       
       
        if(args.isAfter())
            //This is after the action method is invoked
            
            
}
```

## onRedirectFinish
 
 This event is fired at the __end__ of the  redirect flow. To be specific, in cases of successful redirects, it will be called right after the view's __postLoad__.
 In cases of errors, this event will be called after __onRedirectError__.
 

```javascript

$onRedirectFinish  : function(route){


}

```


>**TIP**<br/> If you have displayed a loader on the start of the redirect, you should hide it here.



## onRedirectError
In cases of errors in your __redirect flow__, your redirect will be interrupted and this method is going to be called.

```javascript
	
//Handles HTTP Errors on redirect
$onRedirectError : function(route,httpErrorCode){
		
		

}

```




