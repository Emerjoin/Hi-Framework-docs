<!--Topic description-->
<description>Learn how to translate strings containing variable</description>

Dynamic strings translation is a way of making possible to translate strings in which you can find dynamic content within. 

Take the following example:
 - Hi __Jon__, how are you?

__Jon__ currently being displayed, is just a name in a set of many different names.

## Dynamic Markup Strings
Because of how markup translations work in Hi-Framework (Read __Translation Policies__ for details), the syntax for translating dynamic markup strings does not change.

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


## Dynamic Javascript Strings 

As the Translation Policy explains, Javascript is translated on the client-side. 
The way you translate dynamic strings is not very different from how you translate normal strings, after all it's the same feature.

Let's recap: 

```javascript
   translate("Hi Human!") //returns the translated version of "Hi Human!"
```

In order to translate dynamic strings, you just have to pass an object in which one of the keys's name is equal to the name of the "variable" in the string you are about to translate.

Meaning, to get the string in the snipet below translated, we just have to pass a suitable object to the __with()__ promisse in the __translate__ method. 

```javascript
   translate("Hi {{name}}!").with({name:"Jack",other: "Some Other Value"}) //fetches the translated version of "Hi {{name}}!" and parses the name variable
```

> **TIP**<br> If __name__ is a variable from the view's $scope, you can just pass the __$scope__ as param. Since the $scope is an object the key is there, so things will just work fine.

```javascript
   translate("Hi {{name}}!").with($scope)
```

