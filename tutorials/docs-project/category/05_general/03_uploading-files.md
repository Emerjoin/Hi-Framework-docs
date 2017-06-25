<!--Topic description-->
<description>Learn how to ajaxily send files to server</description>

Hi-Framework facilitates developers to create __upload__

### ng-upload

The ng-upload property/directive is responsible for binding the input-file to the view's scope. When files are selected, they automatically get bound to the view's scope. They are immediatelly available to be used as frontier params.

Your markup will look like this:

```xml
<input type="file" ng-upload="profileImage" />
```

#### How to access the selected file from javascript?

```javascript
$scope.profileImage;
```

#### Time to send the file to the server

Remember Frontiers?

Well, then you know how to do it..

```javascript
 MyFrontier.method1($scope.profileImage,otherParam).try(function(result){    
		//Use the result
    }).catch(function(exception){
        //Something went went wrong!
	}).finally(function(){
        //Always executed
    });
```

#### How to clear selected files?

Clear any previously selected file

```javascript
delete $scope.profileImage;
```

#### Callback once a file is selected?

It's called onFiles and if you want the file information, pass a param named upload.

```html
<input type="file" ng-upload="profileImage" onFiles="imageSelected(upload)" />
```

Simple right?

Go to your js view and create method named imageSelected, receive the upload param and get data like : Upload filename, file size, extension, etc..

#### Can you do multiple? Yeah.. U can! :)

See this exemaple below:

```html
<form>
       <!-- Multiple files-->
       <input type="file" ng-upload="photos" onFiles="photosSelected(upload)" multiple/>

       <!--Single file-->
       <input type="file" ng-upload="photo" onFiles="photoSelected(upload)" />
</form>
```

### Server-side

Multipart configurations must be set for the Hi-Framework's servlet in order to enable the upload feature. This is done via the web.xml configuration file.

To set the multipart configuration we must register and map the Hi-Framework's servlet as the following example demostrates.

Be aware that you must set the value HiServlet to the servlet-name property as the following example suggests and you must also set the same url-pattern value used in the example below.

#### web.xml

```xml
  <servlet>
        <servlet-name>HiServlet</servlet-name>
        <servlet-class>mz.co.hi.web.DispatcherServlet</servlet-class>
        <multipart-config>
            <location>/tmp/</location>
            <max-file-size>80848820</max-file-size>
            <max-request-size>918018841</max-request-size>
            <file-size-threshold>1048576</file-size-threshold>
        </multipart-config>
    </servlet>

    <servlet-mapping>
        <servlet-name>HiServlet</servlet-name>
        <url-pattern>/*</url-pattern>
    </servlet-mapping>
```

Now it's time to retrieve the file you sent from the client-side.

### Create your frontier.

```java
@Frontier
public class MyFrontier{
    public Map method1(FileUpload  fileParam, int otherParam){

             //some code here

    }
}
```

As you may have noticed in the Frontier above, your method can receive other params just as a normal Frontier method. Cause it is. :)

The type for the file u are uploading must be mz.co.hi.web.frontier.FileUpload as in the example.

Simple right?

#### U can also handle multiple files

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

Okay.. U got the file.. Now what?

#### Writting the file

```java
@Frontier
public class MyFrontier{
    public Map method1(FileUpload  fileParam, int otherParam){
             
              try {

                    file.saveToFolder("/your-directory/");

                }catch (Exception ex){

                    System.err.println("Upload failed");
                    ex.printStackTrace();

                }
             

    }
}
```

### Good to know!

This implementation obligates Hi-framework to use form-data to transmit frontier invocations Params (http://java.sun.com/javaee/6/docs/api/javax/servlet/http/HttpServletRequest.html#getParts%28%29)





