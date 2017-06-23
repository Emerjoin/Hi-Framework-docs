<!--Topic description-->
<description>This tutorial explains how to add custom angular modules to your Hi app</description>

## Creating the __run.js__ file
In order to load external modules, Hi-Framework expects you to have a __javascript__ file named __run__ in your web directory root.

```
 |-- webapp
        |-- WEB-INF
        |-- webroot
        |-- views
        |-- ...
        |-- run.js
```
## Declaring the modules
To achieve this goal, you will have to set the __Hi.$config.angular.modules__ variable with your modules names array.

Your __run.js__ file will look like this:<br>

```js
    
    
    //Here we specify the angular modules to be loaded
    Hi.$config.angular.modules = ["module1","module2","moduleN"];

    
```


## Including the modules scripts
The last step is to include the modules scripts in your __template's__ HTML file:

```html

    ...

    <!--The Hi-Framework script-->
    <script src="hi-es5.js"></script>

    <!--Your angular modules scripts-->
    <script src="path/to/module1-script.js"></script>
    <script src="path/to/module2-script.js"></script>
    <script src="path/to/module3-script.js"></script>
    
    ...
    
```

> **WARNING**<br> Make sure you include the angular modules scripts __after__ the __hi-es5.js__ script.


## Injecting services into View controllers
Once you have included your custom angular modules, you might want to consume services that ship with any of your modules.<br>
Here is how you inject the services into a view controller's $scope:

```js

    Hi.view(function($scope,service1,service2){
         
        //Use the services in here
    
    });


```

You can inject as many services as you need, it will just work.






