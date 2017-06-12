<!--topic description-->
<description>How to redirect the user without causing a page reload</description>

## Hyperlink based redirects
What about having a hyperlink element that redirects the user to a controller's action __ajaxically__?

```html
    
  <a href="controller/action" ajaxify>Redirect</a>

```
Thats all! The hyperlink element will be __ajaxified__.


## Code based redirects
Maybe you want to redirect the user from javascript code:

```js
    
  Hi.redirect("controller/action");
    
```

## Get parameters
Don't worry. You can specify a query string as follows:

```xml
   
   controller/action?param1=value&param2=value

```

## Browser back button
What happens when the user presses the __back__ button on the __browser__?<br>
Chill out, we got it under control. The user will be redirected __ajaxically__ to the __previous page__.



