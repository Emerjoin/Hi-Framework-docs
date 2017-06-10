


> **ATENTION**<br> Hi-Framework is not concerned about how you manage your __java__ source files. It is only concerned about the internal structure of the __webapp__ directory.



## webapp directory

```xml
 |-- webapp
        |-- WEB-INF
            |-- hi.xml
        |-- webroot
        |-- views
        |-- template-name.html
        |-- template-name.js
           
```
If you are familiar with __JavaEE web__ applications you might have noticed that Hi-framework does not change the structure, it just adds a few directories and a configuration file into the __WEB-INF__ directory.

Lets now understand the purpose of each file/directory.

### hi.xml

This is the framework configuration file. Your application is configured here. 

### webroot

This is the assets home. This directory holds scripts, stylesheets, images and all the files that should be publicly accessible. 


### views

This is where the __MVC__ view files live. 


### template-name

Both files __template-name.js__ and __template-name.html__ define a template on top of which, views will be displayed.


> **NOTE**<br> You are completely __free__ to add your own directories and files according to your needs, as long as the directory structure __demanded__ by the framework remains in place.

