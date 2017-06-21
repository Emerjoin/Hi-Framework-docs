<!--Topic description-->
<description>Learn how to acess your view/template's scope from anywhere in your client-side</description>

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


    
## Reaching the template scope from a view controller

If for example you need to access the user details from a view, you could just get them from the template controller as follows:

```js

    var user = Hi.$template.user;
    //do whatever you want here


```

## Reaching the scope of a template/view from anywhere
Access the view/template's scope from any script in your app
```js
	
	 //Accessing variables
	 alert(Hi.$template.varX); 
	 alert(Hi.$view.varX); 
	 
	 //Accessing methods
	 Hi.$template.methodX();
	 Hi.$view.methodX();
	 
	 //Modifying variables
	 Hi.$template.varX = "Some value";
	 Hi.$apply();

```



