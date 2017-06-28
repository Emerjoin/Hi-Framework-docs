<!--Topic description-->
<description>Preparing the Hi-Framework development environment</description>

<img class="left-image" src="assets/images/java8-logo.png" style="width:30%"></img>

Minimum JDK version supported is __1.8__. If you are stuck in 1.7, make sure you get the correct version installed before we proceed.


<img class="left-image" src="assets/images/maven-logo-black-on-white.png" style="width:40%"></img>

We will be using __Maven 3__ as our dependencies management tool, you could use any other or none if you know what you are doing.


<img class="left-image" src="assets/images/javaee-logo.png" style="width:40%"></img>

We will be using a full blown __Java EE container__ (CDI enabled). You can also proceed with a simple Web Container, as long as you 
manually add a CDI implementation and bootstrap it correctly.

__Glassfish 4__ would be a good choice. As long as you get a CDI 1.2 enabled container.