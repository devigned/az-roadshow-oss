# IoT Demo
Internet of Things demo can use a raspberry pi or any other IoT device that supports node.js. I've been using a go-pi-go
setup for this, but you can simulate this by running all of this from a laptop. I'll attempt to give two routes to this,
one using the go-pi-go and the other a more default flow.

# Setup
Before performing this demo, please setup an IoT hub, stream processing job, and service bus eventhub via {add url}

## Simulated Demo
This version of the demo will run from local environment and simulated an IoTHub connected device.

## Go-Pi-Go Demo
This version of the demo expects you have a go-pi-go.

## Goals
- introduce IoT Hub, stream processing jobs and event hub
- explain the scaling difficulties with huge number of devices pushing messages (especially when you need to process queries agains windows within streams)
- explain the tools we are using and that all of the libraries are open source and based on open protocols
- show the device sending streams of messages, producing events from these messages and receiving incoming messages
- this should illustrate a simple procedure for creating a highly scalable messaging infrastructure based in Azure

## Steps

```bash
# expects node installed on the given device

# create an IoT Hub -- already done and conn string injected into the environment (. .env)
# register your device
git clone https://github.com/Azure/azure-iot-sdks.git
cd azure-iot-sdks/tools/iothub-explorer
npm install
# warning this will show everyone the connection string for the device
node iothub-explorer.js $IOT_ADMIN_CONN_STRING create myLittlePi --show="connection-string"

cd ../../../az-roadshow-oss
# start sending events and listening to events
. .env
node device.js

# new terminal
. .env
node app.js

# new terminal
. .env
cd ../../../azure-iot-sdks/tools/iothub-explorer
# send a direct message to our little pi
node iothub-explorer.js $IOT_ADMIN_CONN_STRING send myLittlePi helloworld


```
