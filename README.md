# jsLogger
Logger object writes into the native browser console or a custom writer, if a custom writer is set as an option. To use a custom writer, implement the following writer methods: log(), info(), warn(), error(). 

When any of the logging methods is called, it compares the requested log level with the value of a log level option and logs the message if the log level is sufficient.

If the logging options are changed at a later point, the Logger will use the modified options for the subsequent log operations.

All the logging methods support string formatting, accept variable number of arguments and accept a function as a parameter. When a callback function is specified as a parameter the function will be called if the log level is sufficient.

# Usage
```js
//optional calls, see defaults
Logger.option("level",  Logger.LEVEL_INFO);
Logger.option("writer",  customWriter);  //an object that implements the following methods: log(), info(), warn(), error()

// logging a message
Logger.info("My log level is %d", Logger.option("level"));  // string formatting
Logger.warn("Beware of bugs", "in the above code");         // multiple parameters

// using a callback function as a parameter
Logger.info(function(){
   var foo = "This ";
   var bar = "is ";
   var zing = "a function";
   return foo + bar + zing;
});
```
** Methods **
* info()
