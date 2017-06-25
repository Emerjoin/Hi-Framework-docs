<!--Topic description-->
<description>Learn about handling view lifecycle events globally </description>

Hi-Framework Views come with 3 lifecycle events: __preLoad__, __postLoad__ and __close__.
As views run inside templates, we developed them in a way they notify the __template__ holding them whenever the __lifecycle events__ happen.

<diag style="width:550px;height:490px" src="assets/images/diagrams/svg/View-load-flow-with-notifications.svg"></diag>

## onPreLoad
Every time a __preLoad__ happens in a view, this event on your template controller is fired. 

```javascript
$onPreLoad : function(route,$scope,viewHTML){
        
		//Do whatever
		
}

```

This method gives you 3 arguments :
1. __route__  - The view's route
2. __$scope__ - The view's $scope object
3. __viewHTML__ - The View's Markup

If you wish to change the view's markup dinamically, you just have to __return__ the changed markup version in the method.
```javascript
	$onPreLoad : function(route,$scope,viewHTML){
        
		//Do whatever
		return newMarkup;
	}

```

## onPostLoad
This method is fired everytime a view's __postLoad__ happens.

```javascript
$onPostLoad : function(route,$scope){
		
		//Do whatever
}

```
This method gives you 2 arguments :
1. __route__  - The view's route
2. __$scope__ - The view's $scope object


## onClose
This method is fired everytime just before a view is closed.
```javascript
 $onClose : function(route){
	    
		//do whatever
    
	}

```


 > **NOTICE**<br> All view events get __executed__ before the ones in the template
