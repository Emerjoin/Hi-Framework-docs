<!--Topic description-->
<description>Learn how to send files to server with Hi-Framework</description>


## ng-upload directive

The __ng-upload__ directive is part of Hi-Framework (not AngularJS), and it is responsible for binding file input boxes to scope objects with references of files ready to be uploaded. 
That files, are then sent to the server-side via frontier method invocations (passing the objects as params, the same way we send any other kind of data).

Using __ng-upload__, your markup will look like this:

```xml
<input type="file" ng-upload="profilePhoto" />
```

And you can access the object anytime at __$scope.profilePhoto__.


## Sending the file to server

As we said before, sending files to server does not look different from any other frontier invocations with params:

```javascript
 MyFrontier.method1($scope.profilePhoto,someOtherParam).try(function(result){    
		// Do anything
    }).catch(function(){
        // Do anything
	}).finally(function(){
        // Do anything
    });
```


## Handling the file on server-side

### Configuring web.xml

In order to receive files in server-side, you must set some Multipart configurations in your __web.xml__ file. You must let your server-side know that Hi-Framework's servlet will be handling uploads.

See example below:

```xml
  <servlet>
        <servlet-name>Hi-Framework-Dispatcher-Servlet</servlet-name>
        <servlet-class>org.emerjoin.hi.web.DispatcherServlet</servlet-class>
        <multipart-config>
            <location>/tmp/</location>
            <max-file-size>80848820</max-file-size> 
            <max-request-size>918018841</max-request-size>
            <file-size-threshold>1048576</file-size-threshold>
        </multipart-config>
    </servlet>

    <servlet-mapping>
        <servlet-name>Hi-Framework-Dispatcher-Servlet</servlet-name>
        <url-pattern>/*</url-pattern>
    </servlet-mapping>
```

<info-block title="Correspondance">

   - max-file-size : 77 MB
   - max-request-size : 875 MB
   - file-size-threshold : 1 MB
</info-block>


### Getting the file on Frontier

In your frontier, just make sure the type of the variable expecting your file is __org.emerjoin.hi.web.frontier.FileUpload__.

```java
@Frontier
public class MyFrontier{
    public Map method1(FileUpload  profilePhoto, String otherParam){

             //some code here

    }
}
```



### Writing the file

Writing the file requires you to know where you wish to place it. The syntax for writing files is as simple as follows:

```java
@Frontier
public class MyFrontier{
    public Map method1(FileUpload  file, int otherParam){
             
              try {

                    file.saveToFolder("/path/to/your/uploads/directory/");

                }catch (Exception ex){

                    System.err.println("Upload failed");
                    ex.printStackTrace();

                }
             

    }
}
```

## More on uploads

### Clearing selected files
To achieve this, just delete the $scope variable referencing the file.
```javascript
delete $scope.profilePhoto;
```
### Getting a callback after a file was selected
To achieve this, just handle the __onFiles()__ event.

Make sure to pass a parameter named __upload__ if you wish to get information about the file.

```html
<input type="file" ng-upload="profilePhoto" onFiles="myMethod(upload)" />
```

### Multiple files upload
Getting multiple files uploaded instead of one is as simple as getting only one.

#### Client-side
See this exemaple below:
```html
<form>
       <!-- Multiple files-->
       <input type="file" ng-upload="somePhotos" onFiles="myMethod(upload)" multiple/>

       <!--Single file-->
       <input type="file" ng-upload="profilePhoto" onFiles="myMethod(upload)" />
</form>
```

> **NOTICE**<br> In case of multiple files upload, make sure the param you pass to __onFiles()__ callback is still __upload__



#### Server-side
On the server-side the only thing that changes is that you expect a set of __FileUpload__ objects.
```java
@Frontier
public class MyFrontier{

     //Single file upload 
     public Map method1(FileUpload myFile, int otherParam){

             //some code here

    }


    //Multiple files upload 
     public Map someMethod(FileUpload[] myFiles, int otherParam){

             //some code here

      }

}
```



