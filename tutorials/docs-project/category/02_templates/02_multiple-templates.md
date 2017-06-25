<!--Topic description-->
<description>Learn how to add and use more than one template in your Hi app</description>

There are several reasons that would lead you to create aditional templates. You may need to create a login form or simply have a different template look for specifics views in your app.

## Declaring the templates

In __hi.xml__, add the __templates__ section into the __web__ section.

```xml
 <web>
    <!-- Here we declare the templates of our app-->
    <templates>
        <template>someTemplate</template>
        <template>someOtherTemplate</template>
    </templates>	
 </web>
```

> **WARNING**<br> When you declare templates, Hi-Framework assumes that all the templates in your app will be declared on that section, so it stops considering the default __index__ template.
<br><br>The first template to appear in the list is the one that is going to be applied __by default__.


## Changing Templates

The only way to change the your current template is by using a Hi-Framework bean called __FrontEnd__. 

```java
 @Inject FrontEnd frontEnd;
```

After injecting the __FrontEnd__ bean you will be able to change the current template as shown in the following example:

```java
frontEnd.setTemplate("someOtherTemplate");
```
> **NOTICE**<br> Changing the template forces Hi-Framework to reload the user's browser in order to apply the new template<br>



