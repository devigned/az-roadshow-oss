# Azure Container Services Demo
Scaling out VMs is a good solution for growth in the cloud and provides a very similar model to on premise scale out.
Docker containers can provide a better solution for scale out with a significantly lower cost of goods
(amount money spent on hardware for the equivalent peformance). In this demo we'll show docker containers running in
a Mesos cluster via Docker Swarm. This is a preview of the future of containers in Azure.

# Setup

Before performing this demo, deploy out the Azure Container Service quickstart template. This will take about 2 hrs, so
do this ahead of time see [ACS blog post](https://azure.microsoft.com/en-us/blog/azure-container-service-now-and-the-future/) and
[linked quickstart template](https://github.com/Azure/azure-quickstart-templates/tree/master/mesos-swarm-marathon).

## Goals
- introduce hyperscale docker containers in Azure
- explain the difference between Docker containers and VMs with a focus on the cost of goods
- show the simplicity of deploying Docker containers and introduce the idea of immutable architecture
- deploy out multiple containers with docker and mesos and show that the cluster will balance load
- explain how mesos and swarm work together to balance containers to distributed load
- explain how provisioning infrastructure is now separated from deploying the containers

## Steps
- run `./prepare.sh`. This will open a tmux session showing a watch on the curl from the Apache server.
