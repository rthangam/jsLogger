# jsLogger
Logger object writes into the native browser console or a custom writer, if a custom writer is set as an option. To use a custom writer, implement the following writer methods: log(), info(), warn(), error(). 

When any of the logging methods is called, it compares the requested log level with the value of a log level option and logs the message if the log level is sufficient.

If the logging options are changed at a later point, the Logger will use the modified options for the subsequent log operations.

All the logging methods support string formatting, accept variable number of arguments and accept a function as a parameter. When a callback function is specified as a parameter the function will be called if the log level is sufficient.

