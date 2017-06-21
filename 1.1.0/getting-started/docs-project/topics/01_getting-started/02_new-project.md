<!--Topic description-->
<description>Let's create your first Hi-Framework maven project</description>

## Project type
It must be a web application project.


## Dependencies
The Hi-Framework dependency must be added to your __pom__
```xml
   <dependency>
       <groupId>org.emerjoin</groupId>
       <artifactId>Hi-Framework</artifactId>
       <version>1.1.0</version>
   </dependency>
```

## Repository
Hi-Framework is not in maven-central yet, meaning you must add the Emerjoin maven repository to your __pom__:

```xml
   <repository>
       <id>Emerjoin</id>
       <name>maven-repo</name>
       <url>https://github.com/emerjoin/maven-repo/raw/master</url>
   </repository>
```
        
