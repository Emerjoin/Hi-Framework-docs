<!--Topic description-->
<description>Learn the lifecycle events of a view</description>


## View loading
A view observes two lifecycle events in order to be initialized and presented: __preLoad__ and __postLoad__.<br>
The following diagram illustrates the order in which they occur and right after the diagram each event will be explained.<br>

<img class="diagram" style="height:430px" src="assets/images/diagrams/view-events.png" />


## PreLoad event
This event is fired when the markup of the view is about to be compiled with it's respective $scope in order to be presented.<br>

> **NOTICE**<br> All the data passed from the MVC controller is already available in the __$scope__ when the __preLoad__ is fired.



```js

    Hi.view(function($scope){
    
        $scope.$preLoad = function(){
            
            //do some intialization here
            
        }
    
    }

```

### Transforming the html before the view is presented
The __preLoad__ event can be used to perform some transformations on the view's html before it gets compiled with it's respective $scope.
You can even change the html completely if you want to. All you have to do is return the new __html__ you want to apply.
```js

    Hi.view(function($scope){
     
        $scope.$preLoad = function(html){
            
            //do some html transformation in here
                        
            return newHtml;
            
        }
    
    }

```


## PostLoad event
This event is fired right after the view is presented.


````js

    Hi.view(function($scope){
        
        $scope.$postLoad = function(){
                
           //do some intializations
                
                
        }
        
    }


````


## Close event
This event is fired when the user is attempting to leave the current view. Any attempt of redirecting the user
will cause the execution of this lifecycle event.

> **NOTICE**<br> This event is not fired when the user attempts to close the current browser's tab.


```js

     Hi.view(function($scope){
            
         $scope.$close = function(){
                                 
               //Do something in here                 
                    
         }
            
     }
    

```

### Asking the user if is sure about leaving the view
The best use case of the __close__ event is when we want to make sure the user won't accidentally leave the current view. 

The following examples shows how to achieve this:


```js

    Hi.view(function($scope){
                
        //This is required        
        $scope.$preventClose = true;
                
        $scope.$close = function(close){
                                     
            var sure = //ask user
            if(sure)
                close.proceed();
                        
        }
                
    }

```


> **NOTICE**<br> You may want to do this only with specific views, otherwise, you will be compromising the UX.<br>










