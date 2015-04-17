rabbit Lib
==========
The rabbit Lib is used for ***publishing a senz event message*** or ***registering a senz event***.
The server is on Ali Yun 4 which run a rabbitmq service.

Senz Event
----------
The following are events' definition.
- *A new motion rawdata arrival* called 'new_motion_arrival' .
- *A new sound rawdata arrival* called 'new_sound_arrival'.
- *A new location rawdata arrival* called 'new_location_arrival'.

How to use it
-------------
You can publish a text message to one of the events. eg

'''javascript
var rabbit_lib = require('rabbit_lib');
rabbit_lib.publish(
    'hello world',  // the content of msg.
    'new_motion_arrival'  // the name of event.
);
'''

Also you can register an event, and do something when it occurs.
- First of all, you need define a callback.
- Then, you should specify which event you want to register.
- Finally, you also need tell rabbit lib who you are, i.e. the name of register.

'''javascript
handleMsg = function(msg){
    console.log(msg); // do what you want when event occurs.
};

rabbit_lib.register(
    handleMsg, // the callback.
    'process_rawdata', // the name of register.
    'new_motion_arrival' // the name of event.
);
'''

Tips
----
You could only choose the event from above definitions, but the name of register you could define by yourself.
