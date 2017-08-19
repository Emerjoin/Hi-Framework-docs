<!--Topic description-->
<description>Learn how translation proccess happens and how to lazily load translation resources</description>




## What is required

Eh Obrigatorio ter os dictionaries definidos.


## How it happens

Add a folder named i18n

Markup eh Traduzido no server-side

Translate with.. Dynamic Translation


## Lazy resources loading
```xml
  <enable-concatenation>true</enable-concatenation> WTF is this.. same name dictionary
			<disable-full-bundle-exportation>true</disable-full-bundle-exportation> I get it.. The thing!

			<!--
			<enable-mappings>true</enable-mappings>--> i18n mappings activated + dictionaries are killed

			<dictionaries> 
				<dictionary>words</dictionary> 
				<dictionary>phrases</dictionary>
			</dictionaries>
```

Inside i18n, you can put all of your translations. Let's assume your app has to be in portuguese and english. Since your default language is English(another assumption i'am making), you only need to have the translation to portuguese.

```
 |-- Web
        |-- WEB-INF
        |-- i18n  
            |-- pt.json
        |-- views
        |-- templateName.html
        |-- templateName.js
```
## Sending data to Client-side


## Ignoring default Language


## Translating default Language

As you may have noticed above, translation files must be json's.

NOTE: if you like to use language codes.. or you want some labels of the default language translated, you can create a file with that lannguage as well

```xml
|-- Web
        |-- WEB-INF
        |-- i18n  
            |-- en.json
            |-- pt.json
        |-- views
        |-- templateName.html
        |-- templateName.js
```

And to apply that language by default, just go to hi.xml and set the default language as in the example below:

```xml
<app xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'
     xmlns='http://hi.co.mz/XMLSchema'
     xsi:schemaLocation='http://hi.co.mz/XMLSchema https://talk-code.github.io/releases/ns/hi-1.0.xsd'>
     
     <default-lang>en</default-lang>
   
</app>
```

This configuartion tells Hi Framework to apply the language "en" with translations in file "your-web-directory/i18n/en.json".








## i18n Context
## i18n Mappings
