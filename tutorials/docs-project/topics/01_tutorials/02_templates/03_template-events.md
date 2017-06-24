<!--Topic description-->
<description>Learn about the template lifecycle events</description>

## Templates Loading
A template observes 4 lifecycle events in order to be initialized. The initialization begins on the server-side with __TemplateLoadEvent__ and __TemplateTransformEvent__ and then it ends on the client-side with __startup__ right after __init__. 

<diag style="width:580px;height:695px" src="assets/images/diagrams/svg/Template-load-flow.svg"></diag>



## TemplateLoadEvent
This event is fired right before loading the template. You may use this event to send data to your template controller's scope.

```java

    
    @Inject
    private FrontEnd frontEnd;
    
    public void onTemplateLoad(@Observes TemplateLoadEvent event) {

         Map<String,Object> map = new HashMap<>();
         //add some cool stuff to the map
      
         frontEnd.setTemplateData(map);           
        
    }
    

```

## TemplateTransformEvent
This event is fired after the template was loaded. You can use it to make some transformations in your template before it's sent to the client-side.
```java
public void changeTemplate(@Observes TemplateTransformEvent transformEvent){

        // Examples of how to explore this event

        //Adding DOM elements right after the body tag
        transformEvent.getTemplate().appendJS("webroot/the/path/to/script.js"); 
        transformEvent.getTemplate().appendCSS("webroot/the/path/to/style.css"); 
        transformEvent.getTemplate().append("<tag>content</tag>");
        
        //Adding DOM Elements right inside the <head> element.
        transformEvent.getTemplate().prepend("<tag>content</tag>");
        transformEvent.getTemplate().prependCSS("webroot/the/path/to/style.css")
        transformEvent.getTemplate().prependJS("webroot/the/path/to/script.js");
        
        //Replacing the template HTML by a completely different one.
        transformEvent.getTemplate().setMarkup("<html>Your new markup</html>");

    }

```

## Init event
This event is fired right after the templates markup arrives on the client-side.
```javascript
   Hi.template({
	   
       //Template being initialized
       $init : function() {
       
           //do some awesome stuff in here      
       
       } 
   
   }); 

```

## Startup event
This event is fired after the template is loaded right before loading the first view.
```javascript
    Hi.template({
		
       //when the first view is being loaded
       $startup : function() {
        
           //TIP: use this to dismiss your application loader
       
       } 
   
   }); 

```