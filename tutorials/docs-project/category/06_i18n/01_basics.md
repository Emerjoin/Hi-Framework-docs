<!--Topic description-->
<description>Getting Started with MultiLingual apps in Hi-Framework</description>

## What is i18n?

Internationalization (sometimes shortened to "I18N , meaning "I - eighteen letters -N") is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures.

## Default Language Concept

Hi-Framework handles internationalization in a different way than other frameworks. Instead of creating keys to indetify positions in whitch the labels will stand, Hi-Framework introduces a concept called __Default Language__. 
<br/> Default Language is the primary language your application will speak, and Hi-Framework allows you to write its words directily into your application labels and later translate them to different languages.  




## Markup Translation

In order to help you get your markup translated, Hi-framework possesses a special property for you to add in your elements: __translate__.

The example below is a representation of what could be your view/template's markup:

```html
<label>Your name</label>

<input type="text" placeholder="Type your name.." />
```

To have the strings in this markup translated, you can use two different approaches.

### Aproach 1 - Translating labels of your default language

```xml
<label translate>Your name</label>

<input type="text" placeholder="Type your name.." translate translate-placeholder />

```

What happens here?

when you add translate directive into your element, Hi Framework will lookup for another porperty in your element that starts with "translate-".

- If Hi-Framework doesn't find it, It will consider the __inner HTML__ of that element as the __string to be translated__.

- If Hi-Framework finds it, it will consider the value of the porperty with a name same as the one coming after "translate-". In the example above, the value of placeholder (__Type your name..__) will be considered as the __string to be translated__.



### Aproach 2 - Using positions keys

```xml
<label translate="your-name">Your name</label>

<input type="text" placeholder="Type your name.." translate-placeholder="your-name-placeholder" translate />
```

In this case, Hi-Framework will consider as __strings to be translated__, "your-name" and "your-name-placeholder". 





## Javascript Strings Translation

The __translate()__ function in Hi-Framework is in your view's scope and also in the global scope(meaning, is accessible from anywhere). Whenever you need to translate a javascript string, you just need to pass the string as param to __translate()__ function.


See the example below:

```javascript
Hi.view(function($scope){

    $scope.myFunction = function(){
	
		alert(translate("Person sucessfully saved")); //"Person sucessfully saved" is the string to be translated
       
		alert(translate("Person sucessfully saved","person-saved-message")); //"person-saved-message" is the string to be translated
     
	 }  
	 
}
```

> **NOTICE**<br> To reduce verbosity, we created an alias for __translate()__. The alias is  ____t()__ ,  __two underscores__ plus a __t__. They both work the same way.



## Setting up i18n support in your app

In order to have your application internationalized, you first have to inform Hi-Framework about the languages and directories you will be using.

- __Languages__ : Set of languages your application will be speaking. Hi-Framework will require you to define at least one (The Default Language).
- __Dictionaries__ : Each dictionary is a Set of words to be translated. Hi-Framework requires at least one, but you may create as many as you like.

In the following example, we will define two languages : __Portuguese__ and __English__. English will be the default language, meaning all labels will initially be in english and then translated to other languages (Portuguese for now).

### Creating Translation Sources
1. In the root of your web directory , create a folder named **i18n**, and within it create a directory for the languages you wish to translate your app to (just __pt__ in this case). 
2. Within that directories(pt), create dictionary files. For now, we'll just be creating one dictionary file "messages.lang". 

> **IMPORTANT**<br> The extension for dictionary files is __.lang__


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

With the structure above, we have our first step into getting our "English speaking app" to also speak Portuguese.

### Configuring i18n in hi.xml
Now that we created the translatation sources (i18n directory), we need to tell Hi-Framework to load them, therefore we need to open hi.xml and configuare it as follows:

```xml
	<?xml version="1.0" encoding="UTF-8" ?>
	<app xmlns="http://hi-framework.org/XML/1.1.0">

		...

		<i18n>
		
			<languages>
				<language default="true">en</language>
				<language>pt</language>
			</languages>
			
			<dictionaries> 
				<dictionary>messages</dictionary>
			</dictionaries>

		</i18n>

	</app>
```



### Dictionary files

The dictionary files contain the translatation correspondance between different languages.

For the example we are following, the dictionary file (messages.lang), will have the following content :

```proprieties
	Your name = O seu nome
	Type your name.. = Escreva o seu nome..
```

If you chose to set translatation keys rather than using your default language labels, your file will probably look like this :

```proprieties
	your-name-placeholder = Escreva o seu nome..
	your-name = O seu nome
```


#### Composition rules

- A line can only contain one translatation
- Blank lines are skipped
- white spaces before and after the translatation phrases are ignored. (All Strings are trimmed) 
- __=__ is how you match keys with values
- You can escape __=__ by typing __\\=__ 


### Activacting a language

By default Hi-Framework will activate the default language (English in our case), but you may change the language in a very simple way: 

To switch to a different language you just have to call the __FrontEnd.setLanguage()__ in any Managed Bean (We recommed you to do it in Frontiers/Controllers).

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

Every time __FrontEnd.setLanguage()__ is executed, Hi-Framework sends commands to your browser, telling it to reload the page so the user can see the effect.

> **TIP**<br> You can also know the current language by invoking __FrontEnd.getLanguage()__


