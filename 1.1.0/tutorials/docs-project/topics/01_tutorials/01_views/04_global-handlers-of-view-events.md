<!--Topic description-->
<description>Learn about handling view lifecycle events globally </description>

<diag style="width:550px;height:490px" src="assets/images/diagrams/svg/View-load-flow-with-notifications.svg"></diag>

### $onPreLoad
This method is invoked everytime a view is about to be loaded. __View Invocations__ get precidence.
```javascript
$onPreLoad : function(route,$scope,view){
        
		//You may need this...
		
    }

```

### $onPostLoad
This method is invoked everytime right after a view finishes loading. __View Invocations__ get precidence.
```javascript
$onPostLoad : function(route,$scope){
		
		//Ideas?? Well, no clue mate!
    }

```


### $onClose
Whenever you want
```javascript
 $onClose : function(route){
	    
		//Any use for this??
    
	}

```

