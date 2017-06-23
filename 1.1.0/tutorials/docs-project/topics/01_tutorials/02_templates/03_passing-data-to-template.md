<!--Topic description-->
<description>Learn how to send data to your template</description>

## Rendering data in the template area
Let's say you need to render the user's first and last names on the template area. How do you proceed?<br> You must modify your template. By template we mean both the HTML and the JS files.<br> This tutorial considers that
you will be modifying the default template: __index__.

### index.html
The following template markup does not include the required scripts (jquery and hi-es5). It serves only as a demonstration:
````html    
    <html>
        <head>
           <!-- There is stuff missing in here -->      
        </head>
        <body>             
            <a href="#">
                 <!--This is plain angular JS-->
                 {{user.firstName}} {{user.lastName}}
            </a>        
            <div id="view_content">{{view_content}}</div>                
        </body>
    </html>  
````


### index.js
The template controller declaration:

````js

    Hi.template({
    
        //This is the object we want to render
        user:{
           firstName:"John",
           lastName:"Doe"
        }
    
    });
    
````

What we have done so far works perfectly, the only caveat is that we want the user data to be coming from the server-side,
we don't want to hardcode it because it's nonsense. That's exactly what we are going to do next.


## From the server-side straight to the template controller

The only way to pass data from the server-side straight to the template controller is observing a specific CDI event as follows:

```java
     
    @ApplicationScoped
    public class Whatever {
    
    
         @Inject
         private FrontEnd frontEnd;          
               
         //Will be fired every time the template is loaded
         public void doMagic(@Observes TemplateLoadEvent event){
            
               UserInfo info = //fetch user data
               Map data = new HashMap();
               data.put("user",info);        
               frontEnd.setTemplateData(data);           
         
         }    
    
    }

```

> **IMPORTANT**<br> The __TemplateLoadEvent__ is fired every time the page is loaded, which means, the user data will always be there.

