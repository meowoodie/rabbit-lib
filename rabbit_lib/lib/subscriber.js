var rabbit = require('wascally');
var configuration = require('./configuration.js');

function handleMessage(callback){
    //setting up the handler for the subscriber
    rabbit.handle('test.message', function(msg) {
        try {
            console.log('Received Msg from event.');
            callback(msg.body);
            msg.ack();
        }
        catch( err ) {
            msg.nack();
        }
    });
    console.log('Waiting for message from publisher.');
};

exports.registerEvent = function(callback, consumer_name, event){
    var config = configuration.topology;
    config['queues'][config['queues'].length] = { name: consumer_name, subscribe: true};
    config['bindings'][config['bindings'].length] = { exchange: event, target: consumer_name, keys: '' };
    rabbit.configure(config)
        .then(handleMessage(callback));
};
