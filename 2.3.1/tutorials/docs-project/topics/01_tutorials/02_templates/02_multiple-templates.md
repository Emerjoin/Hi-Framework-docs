<!--Topic description-->
<description>Learn how to add more than one template into your app</description>

There are several reasons that would lead you to create aditional templates. You may need to create a login form or even provide a diferent look to specifics views in your app.

## Declaring the templates

In __hi.xml__, add the __templates__ section into the __web__ section.

```xml
 <web>
	<templates>
		<template>someTemplate</template>
		<template>someOtherTemplate</template>
	</templates>
  </web>
```

> **WARNING**<br> When you declare templates, Hi-Framework assumes that all the templates in your app will be declared on that section, so it stops considering the default __index__ template.

> **NOTICE**<br> If none of your templates is named __index__, Hi-Framework will load at first, the first template in that list.


## Changing Templates

The only way to change the your current template, is by using a Hi-Framework Bean called __FrontEnd__. 

```java
	@Inject FrontEnd frontEnd;
```

After injecting the __FrontEnd__ Bean into your CDI Bean, you will be able to set other template as shown in the following example:

```java
frontEnd.setTemplate("someOtherTemplate")
```
> **NOTICE**<br> Setting a template forces Hi-Framework to reload the user's browser



