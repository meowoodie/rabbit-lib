var publisher = require('../lib/publisher.js');
var subcriber = require('../lib/subscriber.js');

handleMsg = function(msg){
    console.log(msg);
};

publisher.publishMessage('hello world', 'new_motion_arrival');
subcriber.registerEvent(handleMsg, 'process_rawdata', 'new_motion_arrival');