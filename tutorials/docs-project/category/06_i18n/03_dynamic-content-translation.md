<!--Topic description-->
<description>Learn how to translate content containing variables</description>

Dynamic strings translation is a way of making possible to translate strings in which you can find dynamic content within. 

Take the following example:
 - Hi __Jon__, how are you?

__Jon__ currently being displayed, is just a name in a set of many different names.

## Dynamic markup strings
Because of how markup translations work in Hi-Framework, the syntax for translating dynamic markup strings does not change.

Meaning __this__:

```html
   <label translate>Hi</label>
```

and __this__:
```html
   <label translate>Hi {{name}}</label>
```

Will both __be translated in the same way__ (On the server-side as the policy states).

What will happen is that once the translated version of the markup reaches the client side, the variables inner the labels will naturally be handled by __AngularJs__.

Let's assume the dictionary file containing that translation looks like this :
```xml
   Hi {{name}} = Oi {{name}}
```

When the markup of the view gets loaded, it will be looking like this :

```html
   <label>Oi {{name}}</label>
```

And then __AngularJs__ will just __be AngularJs__.


## Dynamic javascript strings 

As the Translation Policy explains, Javascript is translated on the client-side. 
The way you translate dynamic strings is not very different from how you translate normal strings, after all it's the same feature.

Let's recap: 

```javascript
   translate("Hi Human!") 
   //returns the translated version of "Hi Human!"
```


You can translate a string containing variables, as long as you provide an object
 for Hi-Framework to read their values from:
 
 

```javascript
   translate("Hi {{name}}!").with({name:"Jack"}) 
   //1. fetches the translated version of "Hi {{name}}!" 
   //2. apllies the value of the {{name}} variable
   //3. returns the final string
```



> **TIP**<br> If __name__ is a variable from the view's $scope, you can just pass the __$scope__ as param. Since the $scope is an object the key is there, so things will just work fine.

```javascript
   translate("Hi {{name}}!").with($scope)
```

