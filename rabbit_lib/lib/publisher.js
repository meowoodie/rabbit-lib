var rabbit = require('wascally');
var configuration = require( './configuration.js' )

publishMsg = function(msg, event) {
    console.log('The chosen event is ' + event + '\nThe content of Msg is ' + msg + '\nSending Msg...\n');
    rabbit.publish(event, {
        type: 'test.message',
        body: msg,
        routingKey: ''
    });
};

exports.publishMessage = function(msg, event){
    rabbit.configure(configuration.topology)
        .then(publishMsg(msg, event));
};

