<!--Topic description-->
<description>Getting-started with multilingual apps in Hi-Framework</description>

## i18n - concept

Internationalization (sometimes shortened to "I18N , meaning "I - eighteen letters -N") is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures.

## Default language concept

Hi-Framework handles internationalization in a different way than other frameworks. Instead of creating keys or codes *like-this-one* to identify content to be translated, Hi-Framework introduces a concept called __Default Language__. 
<br/> 

> __Default language__<br>
> Is the primary language your application will speak, and Hi-Framework allows you to write its words directly into your application labels and later translate them to different languages.  



## Markup translation

In order to help you get your markup translated, Hi-framework possesses a special attribute for you to add to your DOM elements: __translate__.
Hi-Framework can translate from __inner-html__ to __attributes__.

The example below is a fragment of what could be your view/template's markup:

```html
<label>Your name</label>
<input type="text" placeholder="Type your name.." />
```

To have the strings in that markup translated, you can use two different approaches:
* Default-language translation
* Keys based translation

### Default-language translation

This approach invites you to translate your apps in a new way. You don't have to go around replacing your labels
with keys so that you can later map the keys to content in specific languages.

The Default-language translation approach only requires you to use the __translate__ attribute.
Check it out:<br><br>

```xml

<!--Translate inner html-->
<label translate>Tell us your name please</label>
<!--Translate attribute-->
<input type="text" placeholder="Type your awesome name here.." translate-placeholder />

```

#### __Translation explained__

Hi-Framework looks for DOM elements with the __translate__ attribute or any other attribute that match the pattern __translate-x__, where __x__ is an attribute
present on the same DOM element.


- When Hi-Framework finds an attribute that matches the pattern __translate-x__, it translates the value of the __x__ attribute, 
and then replaces its value.

- When Hi-Framework finds the __translate__ attribute on a DOM element, it translates the inner-HTML content and then
replaces it with the translation result.

In the example above, the value of placeholder (__Type your awesome name here..__) will be considered as the __string to be translated__.


### Keys based translation

This is an enhancement to what all the other web frameworks support. 
The translation is based in keys, not in the content you present by default.
The difference with other frameworks is that you will only use the keys to translate, you won't be replacing your labels/messages 
with keys. Check it out:

```xml

<!--Notice that the translate attribute has a value-->
<label translate="your-name-label">Tell us your name please</label>
<!--Notice that the translate-placeholder attribute has a value-->
<input type="text" placeholder="Type your awesome name here.." translate-placeholder="name-input-placeholder"/>

```

In this case, Hi-Framework will consider as __strings to be translated__, "your-name-label" and "name-input-placeholder",
instead of "Tell us your name please" and "Type your awesome name here..".





## Javascript strings translation

Hi-Framework ships with a global function that allows translating strings from any script. The name of the function 
is the same with the translation attribute:

<info-block title="translate(msg, key)">
   
   __msg__ - the message to be translated. <br>
   __key (optional)__ - when present, it gets translated instead of __msg__. If the translation fails, then the __msg__ value is returned. <br>
 
</info-block>


See the example below:

```javascript
Hi.view(function($scope){

     $scope.whatever = function(){
	
         //"Person sucessfully saved" is the string to be translated
         alert(translate("Person sucessfully saved")); 
       
         //"person-saved-message" is the string to be translated
         alert(translate("Person sucessfully saved","person-saved-message"));
     
     }  
      
}
```

> **NOTICE**<br> To reduce verbosity, we created an alias for the __translate__ function. The alias is  ____t__ ,  __two underscores__ plus a __t__. They both work the same way.



## Setting up i18n support in your app

In order to have your application internationalized, you first have to inform Hi-Framework about the different languages your app supports and
the names of dictionary files you will be using to translate it.

- __Languages__ : Set of languages your application will be speaking. Hi-Framework will require you to define at least one (The Default Language).
- __Dictionaries__ : a dictionary is a set of tokens to be translated. Hi-Framework requires at least one, but you may create as many as you like.

In the following example, we will define two languages : __Portuguese__ and __English__. English will be the default language, meaning all labels will initially be in english and then translated to other languages (Portuguese for now).

### Creating translation sources
1. In the root of your web directory , create a folder named **i18n**, and within it create a directory for the languages you wish to translate your app to (just __pt__ in this case). 
2. Within that directories(pt), create dictionary files. For now, we'll just be creating one dictionary file "messages.lang". 

> **IMPORTANT**<br> The extension for dictionary files is __.lang__ and the encoding is expected to be __UTF-8__.


```xml
	|-- Web
        |-- WEB-INF
        |-- i18n  
            |-- pt
                |-- messages.lang
        |-- views
        |-- templateName.html
        |-- templateName.js
```

With the structure above, we have just completed our first step into getting our "English speaking app" to also speak Portuguese.

### Configuring i18n in hi.xml
Now that we created the translation sources (i18n directory), we need to tell Hi-Framework to load them, therefore we need to open hi.xml and configuare it as follows:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<app xmlns="http://hi-framework.org/XML/1.1.0">
   ...
   <i18n>
      <!-- The languages that the app speaks-->   
      <languages>
         <language default="true">en</language>
         <language>pt</language>
      </languages>	
      <!-- The dictionaries that will hold translated content-->
      <dictionaries> 
         <dictionary>messages</dictionary>
      </dictionaries>
   </i18n>
   ...
</app>
```



### Dictionary files

The dictionary files contain the translation correspondence between different languages.

For the example we are following, the dictionary file (messages.lang), will have the following content:

```properties
	Tell us your name please = O seu nome por favor
	Type your awesome name here.. = Escreva o seu nome aqui..
```

If you chose to set translation keys rather than using your default language labels, your file will probably look like this :

```properties
	your-name-label = O seu nome por favor
	name-input-placeholder = Escreva o seu nome aqui..
```


#### __Composition rules__

- A line can only contain one translation
- Blank lines are skipped
- white spaces before and after the translation tokens are ignored. (All Strings are trimmed) 
- __=__ is how you match keys with values
- You can escape __=__ by typing __\\=__ 


### Activating a language

By default Hi-Framework will activate the default language (English in our case), but you may change the language in a very simple way: 

To switch to a different language you just have to call the __FrontEnd.setLanguage__ method in any Managed Bean (We recommend you to do it in Frontiers/Controllers).

> WARNING<br>
> __FrontEnd.setLanguage__ will cause a page reload.

```java
  ...
  
  import org.emerjoin.hi.web.FrontEnd;
    
  @Frontier
  @ApplicationScoped
  public class SomeFrontier{  
  
     @Inject FrontEnd frontEnd;
		
     public long changeLanguage(String lang){
            
        frontEnd.setLanguage(lang);
        
     }             
  }
```


> **TIP**<br> You can find out what the current language is by invoking __FrontEnd.getLanguage__


