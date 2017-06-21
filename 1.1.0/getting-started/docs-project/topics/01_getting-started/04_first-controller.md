<!--Topic description-->
<description>Let's create the the hello/world controller</description>

## Controller definition

Before we go any further, lets define a __Controller__.<br><br>
The user interacts with the system navigating through URLs. Each url, is used to retrieve interactive content and points to a __public method__ of a Controller. 
The URLs format is: __controller-name/action-name__ where __action-name__ is the name of a public method.

A controller is a __CDI managed bean__ that extends the base controller class. 

What we want to do now, is to create a web application that displays a __Hello World__ message when entering __hello/world__ on the browser.

Lets see how the __Hello.java__ controller file should look like:

## Hello.java


```java
package whatever.pkg;

import mz.co.hi.web.mvc.Controller;
import mz.co.hi.web.mvc.exceptions.MvcException;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped //It could be any other CDI scope
public class Hello extends Controller {

    //This is automatically mapped to hello/world
    public void world() throws MvcException{

        this.callView(); //Tels Hi-Framework to render the view

    }

}
```


So, how do you create a view?


## Creating the View

A view is composed by __two__ files: an __html__ file and its correspondent __JavaScript__ file. 
These two files should have the same name as the action that calls them and they must be placed under the __webapp/views__ directory, according to the following directories structure:

```xml
 |-- webapp
        |-- views
            |-- hello
                |-- world.html
                |-- world.js
           
```

> **NOTICE**<br> We have created a directory with the controller's name: __/hello__ and then we created __two files__ under that directory. 
> The two files we just created represent the view for __hello/world__.

<info-block title="Naming convention">
    Hi-Framework uses the <b>kebab-case</b> to map controllers and their respective action methods.
    For example: considering a controller class named <b>SalesReports</b>, the folder created under <b>/views</b> should be <b>sales-reports</b>, meaning the controller will be accessible via <b>/sales-reports/action-name</b> URL.
</info-block>


### world.html

This file contains markup content to be loaded and renderized on browser for the *hello/world* URL.
```html
<div>
	<h1>Hello world</h1>
</div>
```

### world.js

This file contains javascript code that manipulates the markup content, before, during and after its renderization.
```javascript
Hi.view(function($scope){
	
	//Body empty for now

});
```
