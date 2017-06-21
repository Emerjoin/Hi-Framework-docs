<!--Topic description-->
<description>Learn about the template lifecycle events</description>


## Templates Loading
A template observes 4 lifecycle events in order to be initialized. The initialiation begins on the server-side with __TemplateLoadEvent__ and __TemplateTransformEvent__. And then it ends on the client-side with __startup__ right after __init__. 

<img class="diagram" style="height:620px" src="assets/images/diagrams/template-load-flow.png" />


## TemplateLoadEvent
This event is fired right before loading the template. You may use this event to send user's data to your template.

```java

	public void onTemplateLoad(@Observes TemplateLoadEvent event) {

            if(!frontEnd.getTemplate().equals("index")) //Ignoring a possible login template
                return;

            Map templateData = new HashMap();

            Map user = new HashMap();
            user.put("name", currentUser.getInfo().getName());
            user.put("photo", currentUser.getInfo().getPhoto());
            templateData.put("user", user);
            
            frontEnd.setTemplateData(templateData); 
        
    }

```

## TemplateTransformEvent
This event is fired after the template was loaded. You can use it to make some transformations in your template before it's applied.
```java
public void changeTemplate(@Observes TemplateTransformEvent transformEvent){

        transformEvent.getTemplate().appendJS("webroot/faula.bravia.js"); 
        transformEvent.getTemplate().appendCSS("webroot/faula.bravia.css"); 
        transformEvent.getTemplate().append("<tag>info</tag>");
        transformEvent.getTemplate().prepend("<tag>info</tag>");
        transformEvent.getTemplate().prependCSS("webroot/faula.bravia.css") //asset is placed in header
        transformEvent.getTemplate().prependJS("webroot/faula.bravia.js"); //asset is placed in header
        transformEvent.getTemplate().getMarkup();
        transformEvent.getTemplate().getName();
        transformEvent.getTemplate().setMarkup("<html>My new MarkUP</html>");

    }

```

## $init event
This event is fired right after the templates markup arrives on the client-side.
```javascript
   Hi.template({
	   
       //Template being initialized
       $init : {
       
          
       
       } 
   
   }); 

```

## $startup event
This event is fired after the template is loaded right before loading the first view.
```javascript
    Hi.template({
		
       //when the first view is loaded
       $startup : {
       
       
       } 
   
   }); 

```

> **TIP**<br> If you have a loader for your template, this is when you should stop it.