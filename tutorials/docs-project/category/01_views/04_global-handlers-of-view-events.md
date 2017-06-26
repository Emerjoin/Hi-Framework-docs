<!--Topic description-->
<description>Learn about handling view lifecycle events globally </description>

Hi-Framework Views come with 3 lifecycle events: __preLoad__, __postLoad__ and __close__.
As views run inside templates, we developed them in a way they notify the __template__ holding them whenever their __lifecycle events__ occur.

<diag style="width:550px;height:490px" src="assets/images/diagrams/svg/View-load-flow-with-notifications.svg"></diag>

## Handler functions
Lets now see how to declare and use the view global events handlers

### onPreLoad handler
Every time a __preLoad__ happens in a view, this handler on your template controller is fired. 

```javascript
$onPreLoad : function(route,scope,html){
        
  //Do whatever
		
}
```


If you wish to change the view's markup dynamically, you just have to __return__ the changed markup version in the method.
```javascript
$onPreLoad : function(route,scope,html){
        
    //Do whatever
    return newMarkup;
	
}
```

### onPostLoad handler
This handler is fired every time a view's __postLoad__ happens.

```javascript
$onPostLoad : function(route,viewScope){
		
    //Do whatever

}
```

### onClose handler
This handler is fired every time just after a view is closed.
```javascript
$onClose : function(route){
	    
   //The view is already closed
    
}
```


> **NOTICE**<br> All view events get __executed__ before the ones in the template


## Handler arguments
Find below the description for each of the arguments passed to the handler functions:

<info-block title="route">
    Represents the <b>MVC</b> route object.
</info-block>

<info-block title="scope">
    Represents the view's <b>$scope</b> object.
</info-block>

<info-block title="html">
    Represents the View's <b>markup</b> string
</info-block>
