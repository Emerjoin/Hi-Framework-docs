<!--Topic description-->
<description>Learn the lifecycle events of a view</description>


## PreLoad event
This event is fired when the markup of a view is about to be compiled with it's respective $scope in order to be presented.<br>

> **WARNING**<br> All the data passed from the MVC controller is already available in the __$scope__ when the __preLoad__ is fired.




```js

    Hi.view(function($scope){
    
        $scope.$preLoad = function(){
            
            //do some intialization here
            
        }
    
    }

```

### Transforming the html before the view is presented

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

> **WARNING**<br> This event is not fired when the user attempts to close the current browser's tab.


```js

     Hi.view(function($scope){
            
         $scope.$close = function(){
                                 
               //Do something in here                 
                    
         }
            
     }
    

```

### Asking the user if is sure about leaving the view

```js

    Hi.view(function($scope){
                
        $scope.$close = function(close){
                                     
            var sure = //ask user
            if(sure)
                close.proceed();
                        
        }
                
    }

```







