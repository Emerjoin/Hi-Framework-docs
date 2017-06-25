<!--Topic description-->
<description>Learn the lifecycle events of a view</description>


## View loading
A view observes two lifecycle events in order to be initialized and presented: __preLoad__ and __postLoad__.<br>
The following diagram illustrates the order in which they occur.<br>

<diag style="width:230px;height:410px;" src="assets/images/diagrams/svg/load-view-flow.svg"></diag>

## PreLoad event
This event is fired when the markup of the view is about to be compiled with it's respective $scope.<br>

> **NOTICE**<br> All the data passed from the MVC controller is already available in the __$scope__ when the __preLoad__ is fired.



```js

    Hi.view(function($scope){
    
        $scope.$preLoad = function(){
            
            //do whatever here
            
        }
    
    }

```


### Transforming the html before the view is presented
The __preLoad__ event can be used to perform some transformations on the view's html before it gets compiled with it's respective $scope.
You can even change the html completely if you want to. All you have to do is return the new __html__ you want to apply.
```js

    Hi.view(function($scope){
     
        $scope.$preLoad = function(html){
            
            //do some html transformations in here
                        
            return newHtml;
            
        }
    
    }

```


## PostLoad event
This event is fired right after the view is presented. It's the perfect spot to initialize some UI components.


````js

    Hi.view(function($scope){
        
        $scope.$postLoad = function(){
                
           //you can do some intializations here
                
                
        }
        
    }


````


## Close event
This event is fired when the user is attempting to leave the current view. Any attempt of redirecting the user
will cause the execution of this lifecycle event.

> **NOTICE**<br> This event is __not fired__ when the user closes his browser's tab.


```js

     Hi.view(function($scope){
            
         $scope.$close = function(){
                                 
               //Do something in here                 
                    
         }
            
     }
    

```

### Making sure if the user really wants to leave the view 
The best use case of the __close__ event is when we want to make sure the user won't accidentally leave the current view.<br/> 
To achieve that goal, you will have to set the scope's __$preventClose__ variable as __true__. 



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












