<!--Topic description-->
<description>Preparing the Hi-Framework development environment</description>


## Java Development Kit
Minimum JDK version supported is __1.8__. If you are stuck in 1.7, make sure you get the correct version installed before we proceed.

## Maven 3
We will be using Maven 3 as our dependencies management tool, you could use any other or none if you know what you are doing.

## Java EE Environment
We will be using a full blown __Java EE container__ (CDI enabled). You can also proceed with a simple Web Container, as long as you 
manually add a CDI implementation and bootstrap it correctly.

__Glassfish 4__ would be a good choice. As long as you get a CDI 1.2 enabled container.