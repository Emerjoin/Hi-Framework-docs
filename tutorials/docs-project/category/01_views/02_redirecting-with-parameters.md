<!--Topic description-->
<description>Learn how to send data from one view to another on redirecting</description>


We've already seen how basic ajax redirecting works back on the [Getting Started]($gettingStartedBasePath/ajax-redirects.html).
#### Element based redirects
```html
  <element href="controller/action" ajaxify></element>
```

#### Code based redirects
```javascript
  Hi.redirect("controller/action");
```

## Redirecting with parameters
Hi-Framework uses [query strings](https://en.wikipedia.org/wiki/Query_string) as redirect arguments.

#### Element based redirects
```html
  <element href="controller/action?key1=value1&key2&value2&keyN=valueN" ajaxify></element>
```

#### Code based redirects
```javascript
  Hi.redirect("controller/action?key1=value1&key2&value2&keyN=valueN");
```


## Getting data in controller action

Controller actions support only one parameter. That parameter is a __java.util.Map__ object that will contain the data passed to the action in a key-value correspondance with the passed query string.


```java
  public void myAction(Map params) throws MvcException{
		
      params.get("key1") //cast the value and use it as you wish
		
  }
```

If no parameter is passed the __params__ object will just be an empty Map