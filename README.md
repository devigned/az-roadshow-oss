# Azure Cloud Roadshow OSS Apps

In this we'll use azure cli in a docker container to spin up some infrastructure.

## WebApps
```bash
docker run -it microsoft/azure-cli
azure group create az-roadshow-web -l westus
azure group deployment create -g az-roadshow-web --template-uri https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/201-web-app-github-deploy/azuredeploy.json -p '{"repoURL": {"value": "https://github.com/davidebbo-test/NodeHelloWorld.git"}, "siteName": {"value": "azroadshowweb"}, "hostingPlanName": {"value": "someplan"}, "siteLocation": {"value": "westus"}}'
curl http://azroadshowweb.azurewebsites.net/hello.js
```

## Horizontal scalability for Linux backends with ARM
```bash
. .env

# choose one path or the other:
# 1, using azure cli

docker run -it microsoft/azure-cli
azure group create az-roadshow-php-mem -l westus
azure group deployment create az-roadshow-php-mem az-roadshow-php-mem-deploy --template-uri https://raw.githubusercontent.com/azure/azure-quickstart-templates/master/memcached-multi-vm-ubuntu/azuredeploy.json -p "{\"location\": {\"value\": \"West US\"}, \"newStorageAccountName\": {\"value\": \"azroadshowphpmemstor\"}, \"domainName\":{\"value\": \"azroadshowossphpmem\"}, \"adminUsername\": {\"value\": \"$ADMIN_USERNAME\"}, \"adminPassword\":{\"value\": \"$ADMIN_PASS\"}, \"numberOfMemcachedInstances\": {\"value\":  3}}"


# 2, using ansible
cd ansible
ansible scalable-vms.yml -i hosts
curl azroadshowossphpmem.westus.cloudapp.azure.com
```

## Containers
```bash
# build the container environment, spin it up b/c it will take over 1.25 hrs. Instructions here:
# https://azure.microsoft.com/en-us/blog/azure-container-service-now-and-the-future/

# follow the quick start here: https://github.com/Azure/azure-quickstart-templates/tree/master/mesos-swarm-marathon

```


## IoT Hubs
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
