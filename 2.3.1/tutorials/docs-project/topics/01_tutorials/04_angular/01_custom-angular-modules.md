<!--Topic description-->
<description>This tutorial explains how to add custom angular modules to your hi app</description>


## Declaring the modules
If you want to load custom angular modules to your Hi-Framework app, you must specify them in the  __webapp/run.js__ config file as follows:<br>

```js
    
    
    //Here we specify the angular modules to be loaded
    Hi.$config.angular.modules = ["module1","module2","moduleN"];

    
```


## Including the modules scripts
The last step is to include the modules scripts in your __template__ HTML file:

```html

    ...

    <!--The Hi-Framework script-->
    <script src="hi-es5.js"></script>

    <!--Your angular modules scripts come next-->
    <script src="path/to/module1-script.js"></script>
    <script src="path/to/module2-script.js"></script>
    <script src="path/to/module3-script.js"></script>
    
    ...
    
```

> **WARNING**<br> Make sure you include the angular modules scripts __after__ the __hi-es5.js__ script.


## Injecting custom services into View controllers
Once you have included your custom angular module, you might want to consume a service that ships with the module.<br>
Here is how you inject a custom service into a view controller:

```js

    Hi.view(function($scope,service1,service2){
         
        //Use the services in here
    
    });


```

You can inject as many service as you need, it will just work.






