# Horizontal scalability for Linux backends with ARM
In this demo, we are going to create a scalable IaaS solution based on Memcache and Apache on Ubuntu 14.04. There will be a front end
Apache server and three Memcache instances. We'll use Ansible to deploy this ARM template.

## Goals
- introduce to Ansible and the idea you can use many of your devops tools natively in Azure
- explain that the Ansible deployment module is built off of our Azure Python library (in github)
- describe the ansible/scalable-vms.yml playbook and the parallels between it and the Azure CLI deploy
- explain the Apache and Memcache stack and illustrate how simple it was to build an entire scalable stack

## Steps
- run `./prepare.sh`. This will open a tmux session showing a watch on the curl from the Apache server.
- Top Pane:
 - Deploy the stack using `ansible-playbook ansible/scalable-vms.yml -i ansible/hosts`.
   (You should deploy before the demo and redeploy during the demo. This will not hurt anything and greatly speed up the deploy.)
 - see second pane while deployment
 - open the portal and explore/show the running stack
 - describe the differences between the IaaS solution and the PaaS solution concentrating on the tradeoff between
  extreme control and flexibility in IaaS and the more opinionated ease of PaaS.
- Bottom Pane:
 - explain the Ansible Playbook just run `atom ansible/scalable-vms.yml` while you wait for the curl to show the running web server
 - Curl in a watch window targeting the Apache endpoint

## Alternative to Ansible deployment
If you don't want to use ansible for this deployment, you can use the following from the command line:

```bash
. .env
azure group create az-roadshow-php-mem -l westus
azure group deployment create az-roadshow-php-mem az-roadshow-php-mem-deploy --template-uri https://raw.githubusercontent.com/azure/azure-quickstart-templates/master/memcached-multi-vm-ubuntu/azuredeploy.json -p "{\"location\": {\"value\": \"West US\"}, \"newStorageAccountName\": {\"value\": \"azroadshowphpmemstor\"}, \"domainName\":{\"value\": \"azroadshowossphpmem\"}, \"adminUsername\": {\"value\": \"$ADMIN_USERNAME\"}, \"adminPassword\":{\"value\": \"$ADMIN_PASS\"}, \"numberOfMemcachedInstances\": {\"value\":  3}}"
```
