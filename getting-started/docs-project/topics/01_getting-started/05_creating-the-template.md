<!--Topic description-->
<description>Let's now create the template of your first app</description>

## Template definition


Template is what surrounds your views. 
The views are displayed within templates.<br>
Take a look at the following image and it will all be clear.


![Template definition image](assets/images/template-compressed.png)


Each template is composed by __two files__:  HTML and JavaScript, same as views. 

For now, lets focus on creating our default template. 
The name of the template we are going to create is __index__, that's because Hi recognises __index__ as the default template.


> **NOTE**<br> Hi-Framework allows you to have more than one template and switch between them as you need.

The html file of a template is responsible for loading every single script, image, stylesheet or any other asset the application
depends on. 

> **BEST PRACTICE**<br> Views should not include scripts or stylesheets.

The template files should be placed inside the __webapp__ directory, being immediate children of it.
Lets see how our webapp directory looks like, after creating the __index__ template files:

```xml
 |-- webapp
        |-- WEB-INF
            |-- hi.xml
        |-- webroot
        |-- views
        |-- index.html 
        |-- index.js 
```

Let's see how these files are composed.

## index.html

This is the HTML file of our default template. This file __must__:
* Include jquery script (greater or equal to 1.10 )
* Include The hi-framework script 
* Define the place where views should be rendered. 

The code block below will show you how to do it:

```html
<html>
    <head>
        <title>Hi-Framework</title>
        <!--The jquery script-->
        <script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
        <!--The Hi-framework script-->    
        <script src="hi-es5.js"></script>   
    </head>
<body>
    
        <!--The views will placed inside this div-->
        <div id="view_content">{{view_content}}</div>

</body>
</html>

```

> **IMPORTANT RULE**<br> The jquery script should always be included before the Hi-Framework script and they should both be placed as children of the __head__ element.

Feel free to add your own scrips, stylesheets and anything else you want. This a normal HTML file.
Make sure you place your assets (scripts, stylesheets, images) under the __webroot__ directory.
The internal structure of the webroot directory is on you. Create as many folders and files as you need.
If you are going to download the jquery to your application, you should store it under the webroot directory, in a subdirectory of your own choice. For example:

```xml
 |-- webapp
        |-- WEB-INF
            |-- hi.xml
        |-- webroot
            |-- js
                |-- jquery-3.0.0.min.js
        |-- views
        |-- index.html
        |-- index.js
```

You would then have to change the jquery script path in your __index.html__ file to:

```html
<script src="webroot/js/jquery-3.0.0.min.js"></script>
```

You can load any asset in your template. Just make sure you put the right path, always starting with __webroot__ and following the directories structure.

## index.js

This file is designated __template controller__. Lets not get into too much details about this now.
What matters most at this step is the content of the file, which is:

```javascript
Hi.template({

    //Empty body for now 

});
```


