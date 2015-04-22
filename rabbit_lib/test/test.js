var publisher = require('../lib/publisher.js');
var subcriber = require('../lib/subscriber.js');

handleMsg = function(msg){
    console.log(msg);
};
msg = {
    'objectId': 2014111553,
    'projectId': 'test_project'
};
publisher.publishMessage(msg, 'new_motion_arrival');
subcriber.registerEvent(handleMsg, 'process_rawdata', 'new_motion_arrival');