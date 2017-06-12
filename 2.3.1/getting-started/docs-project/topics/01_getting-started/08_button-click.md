<!--topic description-->
<description>Let's play around clicking on a button.</description>


All we want to do here is to click on a button and trigger some __JavaScript__ function.

## The code we want to trigger:

The JavaScript function to be triggered must be added to the 
__$scope__ object of the view controller. Meaning we should edit the view controller file, which in our case is __world.js__.

```js  
    Hi.view(function($scope){
        
        //Here we add the function to the $scope
        $scope.example = function(){
            
            alert("I got invoked");
        
        }; 
          
    });
```


## Adding the button element
Just add the following HTML snippet to your __world.html__.

```html
    
    <button>Click me</button>

```

The button we just added, does exactly nothing. If we want it to trigger the __example__ function __on click__, we must
change that snippet as follows.

## Binding behavior to the button

This is how you bind the __example__ function to the __button__ element's  click event:

```html
    
    <button ng-click="example()">Click me</button>

```

You can now test your view on the browser. Depending on your development environment you might have to __rebuild__ and __redeploy__ the app.


### The magic glue

Did you recognize the __ng-click__ attribute? In case you didn't, let us tell you that it came from __angularJS__.

Hi-Framework __views__ are powered by __angularJS 1.x__.

> **AngularJS 1.x**<br> AngularJS is what HTML would have been, had it been designed for applications. HTML is a great declarative language for static documents. It does not contain much in the way of creating applications, and as a result building web applications is an exercise in *what do I have to do to trick the browser into doing what I want?*<br><br>
>  Find out __more__ clicking <a target="_blank" href="https://docs.angularjs.org/guide/introduction">clicking here</a>.



