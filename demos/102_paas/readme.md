# PaaS OSS
In this demo, we are going to create an Azure WebApp running node. This will be built from the command line using the
open source Azure CLI, a quick start ARM template in github and the WebApp's source node source code will be in github.
You will need to fork and change the repo location, so you can push changes to the forked github repo.

## Goals
- introduce Azure CLI and the open source stack that the CLI is built upon (oss -- node.js all the way up)
- introduce ARM templates and the declarative nature of ARM
- explain ARM parameters and how to specify them on the command line
- show how simple it is to update the PaaS application via a push to github
- explain the tradeoff of PaaS vs IaaS hosting (IaaS provides more configuration and PaaS make more assumptions for simplicity)

## Steps
- run `./prepare.sh`. This will open a tmux session showing a watch on the curl from the WebApp.
- Top Pane:
 - login to the portal via azure cli `azure login`
 - create the resource group `azure group create az-roadshow-web -l westus`
 - create the web app
 ```bash
 azure group deployment create -g az-roadshow-web --template-uri \
 https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/201-web-app-github-deploy/azuredeploy.json \
 -p '{"repoURL": {"value": "https://github.com/devigned/az-roadshow-oss.git"}, "siteName": {"value": "azroadshowweb"}, "hostingPlanName": {"value": "someplan"}, "siteLocation": {"value": "westus"}, "sku": {"value": "Standard"}}'
 ```
 - explain the cmds just run while you wait for the curl to show the running WebApp in the bottom pane
 - show the WebApp in the portal
 - edit the hello.js `atom hello.js`. Perhaps, change "world" to name of the place
 - commit and push your changes to your remote repo
 - In the portal sync the WebApp with your git repo
 - watch the bottom pane and it will reflect your changes
 - optional, you can run `ab -c 5 -t 60 http://azroadshowweb.azurewebsites.net/hello.js` to run a short load test
