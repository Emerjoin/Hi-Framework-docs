<!--Topic description-->
<description>Understand about the redirect flow and how to handle it's events</description>

Redirecting is the act of changin the route you're in. Hi-Framework is based in the MVC pattern, what means that routes endpoints are controller actions.

<diag style="width:670px;height:680px" src="assets/images/diagrams/svg/Redirect-flow.svg"></diag>


### $onRedirectStart

The redirect process, begins on the client-side when the user shows his intention to redirect. He may click a button or something to do that. When that happens, this event is triggered. If you wan't to put loaders in your app, you may use this listener to do so.
```javascript
	$onRedirectStart : function(route){

            //I would display a loader here! Like: $('.my-loader').show();

    },
```
Notice the route there. This listener also receives the route to witch the redirect is aiming.


### $ControlllerRequest
If you need to know everytime a user accesses an action, you can do it here. This event is fired twice to the same action invocation : before and after it.

#### Before controller action
```java
 public void preAction(@Observes ControllerRequestEvent args) {
       
        if(args.isAfter())
            return;
}
```

#### After controller action
```java
 public void preAction(@Observes ControllerRequestEvent args) {
       
        if(!args.isAfter())
            return;
}
```

### $onRedirectFinish
 
If you've shown a loader up there, you should hide it here.
```javascript
	$onRedirectFinish  : function(route){


    },
```
Notice the route there. This listener also receives the route to witch the redirect is aiming.


### $onRedirectError
In cases of errors in your redirect flow, this method is going to be invoked.

```javascript
	
	//Handles HTTP Errors on redirect
    $onRedirectError : function(route,httpErrorCode){
		
		

    }

```
