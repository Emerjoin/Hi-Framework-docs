<!--Topic description-->
<description>Understanding the frontier simultaneous calls policy</description>


__Simultaneous calls policy__ is the way Hi-framework gives you to configure its behavior regarding simultaneous calls of a specific frontier method.
It allows you to:<br>
* Allow simultaneous calls
* Allow simultaneous calls only with different arguments
* Disable simultaneous calls completely (default behavior)

The __simultaneous calls policy__ is configured using annotations on frontier methods.

## Allowing simultaneous calls
Hi-Framework provides you mechanisms to allow simultaneous calls on frontier methods in two ways:

### All simultaneous calls
The following code snippet shows how to enable simultaneous calls on a frontier method.

```java
@Frontier
public class FrontierClazz {

    
    @MultipleCalls
    public void example(int arg1, int arg2){
    
        //We don't care about what comes in here
    
    }
    
}
```

### Only calls with different arguments
Hi-Framework gives you the possibility to allow simultaneous calls of a frontier method only if the the arguments passed to each of the simultaneous calls are different.<br><br>
Lets see an example:

```java

    @Frontier
    public class FrontierClazz {
    
        
        @SingleCall(detectionMethod=CALL_PARAMS)
        public void example(int arg1, int arg2){
        
            //We don't care about what comes in here
        
        }
        
    }
    
```

The snippet above tells Hi-Framework to __deny__ simultaneous calls of that frontier method using the __same arguments__. 

> **@SingleCall(detectionMethod=CALL_PARAMS)**<br> Only simultaneous calls with different arguments will be allowed

<br>There is still one unanswered question here: __how will Hi react when it detects an attempt of simultaneous frontier calls using the same arguments__? The answer is: __it will apply an abortion policy__.

#### Abortion policy
Is the policy applied by Hi-Framework when it detects unauthorized simultaneous frontier method calls. Hi-Framework currently supports
two abortion policies:

<info-block title="ABORT_ONGOING_INVOCATION">
    Will abort the already ongoing frontier call and let the new call proceed. This is the abortion policy applied by <b>default</b>.
</info-block>

<info-block title="ABORT_NEW_INVOCATION">
    Will abort the frontier call that is attempting to initiate and leave the ongoing call.
</info-block>

#### Setting the abortion policy
The snippet below shows how to set an abortion policy.


```java

  ...

  @SingleCall(detectionMethod=CALL_PARAMS,abortionPolicy=ABORT_NEW_INVOCATION)
  public void example(int arg1, int arg2){
            
     //We don't care about what comes in here
            
  }
    
```

> **WARNING**<br> The __@MultipleCalls__ annotation does not allow you to set an __abortion policy__ because all simultaneous frontier calls will be allowed.


## Disable simultaneous calls completely

> **WARNING**<br> Hi-Framework disables simultaneous frontier calls by default and applies the __ABORT_ONGOING_INVOCATION__ abortion policy.

As Hi-Framework already disables simultaneous calls by default, the only reason you would want to do it yourself, would be to change the abortion policy
as follows:

```java

    ...
    
    @SingleCall(detectionMethod=METHOD_CALL,abortionPolicy=ABORT_NEW_INVOCATION)
    public void example(int arg1, int arg2){
              
       //We don't care about what comes in here
              
    }   

```

This is it!

