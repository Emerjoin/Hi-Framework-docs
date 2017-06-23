<!--Topic description-->
<description>Understand about the redirect flow and how to handle it's events</description>

Redirecting is changing the route you're currently in. Hi-Framework is based on the __MVC pattern__, what means that __route endpoints__ are controller __actions__ and actions themselves are responsible for calling the __view__ to be displayed.

In the diagram below, we represent the whole redirecting flow, from __client__ to __server-side__ and __back to client-side__.

<diag style="width:670px;height:680px" src="assets/images/diagrams/svg/Redirect-flow.svg"></diag>


## onRedirectStart

The redirect process will __mostly__ begin on the __client-side__ when the end-user clicks on an element with the __ajaxify__ attribute or in some way invokes the __Hi.redirect()__ method.

When the act of redirecting begins, the method __$onRedirectStart__ on the __template controller__ is fired.

```javascript
	$onRedirectStart : function(route){

            //Do something

	}
```

> **TIP**<br> Use this event to display your redirecting loader. You will later have to hide it when the redirect process ends.

> **NOTICE**<br> The __$onRedirectStart__ method receives one argument which is the route to which you are about to go to.

### Ajax redirecting from server-side

in some special cases you may need to decide the user's next route from the __server-side__. 
Hi-Framework allows you to that by __injecting__ to your __CDI Bean__ The Hi-Framework's __FrontEnd__ Bean.

```java
...
	frontEnd.ajaxRedirect("controller/action");

```

> **IMPORTANT**<br> Doing this, __does not__ mean the redirect is going to start right away in the __server-side__, it only means that when the request flow ends, __Hi.redirect()__ will automatically be called for you immediatly.

## ControllerRequestEvent
This event is what allows you to track everytime a user accesses an action. This event will be fired twice in order to track two different moments : __before__ and __after__ the action execution.

### Before action execution

To track this moment, you just have to make sure the boolean in __isAfter()__ is __false__.

```java
 public void preAction(@Observes ControllerRequestEvent args) {
       
        if(!args.isAfter())
            return;
}
```
> **TIP**<br> Use this event while developing your app to willingly make it slower by making your  __Thread.sleep(milliseconds)__. It will help you simulate a __bad response time__ scenario.

### After action execution
To track this moment, you just have to make sure the boolean in __isAfter()__ is __true__.

```java
 public void postAction(@Observes ControllerRequestEvent args) {
       
        if(args.isAfter())
            return;
}
```

## $onRedirectFinish
 

```javascript
	$onRedirectFinish  : function(route){


	}
```

This event is fired in the __end__ of the  redirect flow. To be specific, in cases of successful redirects, it will called right after the view's __postLoad__.
In cases of errors, this event will be called after __$onRedirectError__.

>**REMEMBER**<br/> If you have displayed a loader on the start of the redirect, you should hide it here.



## $onRedirectError
In cases of errors in your __redirect flow__, your redirect will be interrupted and this method is going to be called.

```javascript
	
	//Handles HTTP Errors on redirect
	$onRedirectError : function(route,httpErrorCode){
		
		

	}

```




