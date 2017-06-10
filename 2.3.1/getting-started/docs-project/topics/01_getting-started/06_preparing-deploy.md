<!--Topic description-->
<description>Getting your first app ready to deployment</description>


## Configuring the framework

Remember the __webapp/WEB-INF/hi.xml__ config file?<br>
It's the XML file that configures the behavior of __Hi-Framework__ regarding your application.


```xml
<?xml version="1.0" encoding="UTF-8" ?>
<app xmlns="http://hi.co.mz/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://hi.co.mz/XMLSchema
      https://talk-code.github.io/releases/ns/hi-1.0.xsd">
		
	<web>
	        <!--Redirect to hello/world when accessing the root path: / -->
            <welcome-url>hello/world</welcome-url> 
	</web>

</app>
```

There is no mandatory configuration to run your Hi app. The configuration file could be as empty as follows:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<app xmlns="http://hi.co.mz/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://hi.co.mz/XMLSchema
      https://talk-code.github.io/releases/ns/hi-1.0.xsd">
		
		<!--Empty configuration file works just fine-->

</app>
```


> **IMPORTANT RULE**<br> The configuration file is not optional. A deployment attempt without the configuration file will result in errors.


## Reviewing the steps

Our web application is ready for deployment. But we may want to review our files and directories structure.<br> Use the following __files explorer component__ to
navigate through the folders tree. Click on files to display their content.

<!--
```xml
 |-- webapp
        |-- WEB-INF
            |-- hi.xml
        |-- webroot
            |-- js
                |-- jquery-3.0.0.min.js
        |-- views
            |-- hello
                |-- world.html
                |-- world.js
        |-- index.html
        |-- index.js
 |-- java
        [--] my.controlles
            |-- Hello.java                
```
-->

<embedfs res="/hello-world.xml" download-url="http://google.co.mz"></embedfs>
<br>





