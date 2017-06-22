<!--Topic description-->
<description>Access your view/template's scope from any client-side script</description>

## Accessing the current view from the template

If for some reason you need to access the $scope of the current view from the template controller, here is how to proceed:

```js
    
    Hi.template({
    
        yourFunction : function(){
            
            var currentView =  this.$activeView;
            //do whatever you want here
        
        }
    
    }


```




## Reaching the scope of the template from anywhere
Access the template's scope from any script in your app
```js
	
	 //Accessing variables
	 var value = Hi.$template.varX;
	 
	 //Accessing methods
	 Hi.$template.methodX();

	 //Modifying variables
	 Hi.$template.varX = //wahetever you want
	 Hi.$template.$applyAsync();

```


## Reaching the scope of the view from anywhere
Access the view's scope from any script in your app
```js
	
	 //Accessing variables
	 var value = Hi.$view.varX; 
	 
	 //Accessing methods
	 Hi.$view.methodX();
	 
	 //Modifying variables
	 Hi.$view.varX = //whatever you want
	 Hi.$view.$applyAsync();

```



