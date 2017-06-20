<!--Topic description-->
<description>How to pass data from a controller's action to the a view?</description>

If you have already experienced __MVC__ frameworks, then you are certainly used to __pass data to views__ before rendering them. This topic
is about __how to keep doing that__.

## Passing the data

It is as easy as follows:

```java
    
    @ApplicationScoped 
    public class Hello extends Controller {
        public void world() throws MvcException{
    
            Map<String,Object> data = new HashMap<>();
            data.put("name","John doe");
            data.put("age",44);
            data.put("email","john.does@emerjoin.org");
            
            this.callView(data);//Pass the data to the view
    
        }
    
    }
    
```

> **NOTE**<br>Each key from the __data__ HashMap becomes a variable in your view's __scope__ . 

## Using the data
The data passed from the controller is immediately added to the __$scope__ of the view, meaning that, such data
is accessible from both: __presentation__ and __view controller__.

### From HTML
We are simply going to render the data passed from the controller:

```html
    <div>
        <span>{{name}}</span>
        <span>{{age}}</span>
        <span>{{email}}</span>
    </div>
```
Easy right? You can do a lot more with that __data__. Take a look at the AngularJS expressions <a href="https://docs.angularjs.org/guide/expression" target="__blank">docs</a>.

### From the View controller

Let's now print the data on the browser's console, from the view's controller:

```js   
    Hi.view(function($scope){
               
        //Calling this function will print the data      
        $scope.myFunction = function(){
        
            console.log($scope.name);
            console.log($scope.age);
            console.log($scope.email);
        };
    
    });     
```



> **TIP ABOUT CONTROLLERS**<br>Avoid contacting databases on controllers and then passing data to views because it degrades the user experience and complicates your data flow.<br>
> Use Frontiers to fetch data to the views. This way you can provide a better user experience and after all, Hi-Framework is only funny if you do things in the __ajax way__.
