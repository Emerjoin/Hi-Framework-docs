<!--Topic description-->
<description>Learn how translation proccess happens and how to tweak it</description>


## Traslation process 

If you read the __basics__, you are probably familiar with the possibility of translating both markup and javascript strings.
But what you may not know is that the way these strings get translated is quite different:

- __Markup strings__ get translated on the __server-side__
- __Javascript strings__ get translated on the __client-side__

On the server-side, right before sending the view/template's markup to client-side, Hi-Framework loads all available dictionaries and translate all strings specified to be translated, and then removes the attributes it demanded you to add (__translate__ and __translate-x__, where __x__ represents an attribute you may intend to translate it's value).

After translating markup, Hi-Framework sends along with the translated versions of markups the set of __all available dictionaries__ of your active language. That's because Hi-Framework works by default with activated __full-bundle-exportation__. 

### full-bundle-exportation

Is a configuration that makes Hi-Framework export all available dictionaries of the active language to the client-side. This configuration is __active by default__ and you can disable it by setting the __disable-full-bundle-exportation__ porperty to __true__ in your __hi.xml__ file.

```xml
   <i18n>
      <disable-full-bundle-exportation>true</disable-full-bundle-exportation>
      ...
   </i18n>	  
```

When __full-bundle-exportation__ is disabled, it means you probably don't want to export all dictionaries to client-side at once, in other words : you require a lazy exportation. 

## Lazy dictionaries exportation

Is the workaround you have to take after disabling __full-bundle-exportation__. It can happen in two ways : using i18n __Context__ or __Mappings__.
### i18nContext 

__org.emerjoin.hi.web.i18n.I18nContext__ is a Managed Bean created to help you manage i18n in your Hi-Framework app.

```java
@Inject
private I18nContext i18nContext;
```

Along other things, __i18n Context__ allows you to export dictionaries to client-side. The dictionaries exported by __i18nContext__ are loaded by Hi-Framework if you declare them in your __hi.xml__(as we did back in the basics). 




> **IMPORTANT**<br> i18nContext is supposed to be used for exportation purposes, only in __controllers actions__.


#### __Exporting a dictionary__

To export a whole dictionary to client-side, you just have to use i18nContext as follows :

```java
i18nContext.exportDictionary("messages");
```

> **NOTICE**<br> "messages" is an example of a name of a dictionary you want to export. Do not append the extension to the name.

#### __Exporting a single token__

If you wish to send tokens and not full dictionaries, Hi-Framework allows you to do it. 

See the following example :
 
```java
i18nContext.export("Type your name..");
i18nContext.export("your-name-input");
```


### i18n-Mappings 

i18n-Mappings were created to make easier the job of declaring and exporting dictionaries. Instead of using __i18nContext__ to export dictionaries in controller actions, i18n-Mappings allow you to easily declare what dictionaries go to what views/templates.

> **IMPORTANT**<br> Differently from how __i18nContext__ works, i18n-Mappings does not require you to declare __dictionaries__ in your __hi.xml__ because i18n-Mappings also load the dictionary if it wasn't loaded before.

#### __Enabling Mappings__

To get Hi-Framework to lookup for i18n-Mapping files, you have to set __enable-mappings__ to __true__ oin your __hi.xml__ file under __i18n__.

```xml
    <i18n>
      <enable-mappings>true</enable-mappings>
      ...
   </i18n>	
```

#### __Mappings files__

i18n Mapping files are __xml__ files that have to be placed under __WEB-INF__ directory(along with hi.xml) with the name __i18n-mappings.xml__.

In the snippet below, you can see an example of how the content of a mapping file looks like :
 
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<mappings xmlns="http://hi-framework.org/i18n/XML/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://hi-framework.org/i18n/XML/1.0.0 http://hi-framework.org/xml/i18n_Schema_1_0_0.xsd">
          
    <templates-mappings>
        <set for="index">
            <dictionary>messages</dictionary>
        </set>
    </templates-mappings>

    <views-mappings>
        <set for="controller-one/action-one">
            <dictionary>words</dictionary>
        </set>
        <set for="controller-two/action-two">
            <dictionary>words</dictionary>
            <dictionary>phrases</dictionary>
        </set>
    </views-mappings>

</mappings>
```

> **IMPORTANT**<br>If you have multiple mapping files (in multiple jars), as long as they are in the path (WEB-DIRECTORY/WEB-INF/i18n-mappings.xml), Hi-Framework will read the configuration as if all was in the same file.

## Distributed dictionaries

Dictionaries concatenation is a configuration that makes Hi-Framework lookup for your dictionaries in the entire classpath, from the war that contains your web app to the libs that it depends on. As long as you keep the required directories structure (/i18n/).

To activate this option just set __enable-concatenation__ to true in your __hi.xml__ file.

```xml
   <i18n>
       <enable-concatenation>true</enable-concatenation>
       ...
   </i18n>

```






