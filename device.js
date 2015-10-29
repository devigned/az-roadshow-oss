// Add reference to the Azure IoT Hub device library
var device = require('azure-iot-device');
// Define the connection string to connect to IoT Hub
var connectionString = process.env.IOT_CONN_STRING;
// Create the client instance specifying the preferred protocol
var client = new device.Client(connectionString, new device.Https());

// Create a message and send it to the IoT Hub every second
setInterval(function(){
  var windSpeed = 10 + (Math.random() * 4); // range: [10, 14]
  var data = JSON.stringify({ deviceId: 'myLittlePi', windSpeed: windSpeed });
  var message = new device.Message(data);
  message.properties.add('myproperty', 'myvalue');
  console.log("Sending message: " + message.getData());
  client.sendEvent(message, printResultFor('send'));
}, 1000);

// Monitor messages from IoT Hub and print them in the console.
setInterval(function(){
  client.receive(function (err, res, msg) {
    if (!err && res.statusCode !== 204) {
      console.log('Received data: ' + msg.getData());
      client.complete(msg, printResultFor('complete'));
    }
    else if (err)
    {
      printResultFor('receive')(err, res);
    }
  });
}, 1000);

// Helper function to print results in the console
function printResultFor(op) {
  return function printResult(err, res) {
    if (err) console.log(op + ' error: ' + err.toString());
    if (res && (res.statusCode !== 204)) console.log(op + ' status: ' + res.statusCode + ' ' + res.statusMessage);
  };
}
