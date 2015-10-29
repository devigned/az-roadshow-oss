# Azure Cloud Roadshow OSS Apps

## WebApps
```bash
azure login
azure group create az-roadshow-web -l westus
azure group deployment create -g az-roadshow-web --template-uri https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/201-web-app-github-deploy/azuredeploy.json -p '{"repoURL": {"value": "https://github.com/davidebbo-test/NodeHelloWorld.git"}, "siteName": {"value": "azroadshowweb"}, "hostingPlanName": {"value": "someplan"}, "siteLocation": {"value": "westus"}}'
http://azroadshowweb.azurewebsites.net/hello.js
```
