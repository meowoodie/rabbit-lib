var rabbit = require('wascally');
var configuration = require( './configuration.js' )

publishMsg = function(msg, event) {
    console.log('------ Sending ------');
    console.log('* The chosen event is ' + event + '\n* The content of Msg is ' + msg + '\n* Sending Msg...\n');
    rabbit.publish(event, {
        type: 'senz.message',
        body: msg,
        routingKey: ''
    });
};

exports.publishMessage = function(msg, event){
    rabbit.configure(configuration.topology)
        .then(publishMsg(msg, event));
};

