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
- I usually set this up using my id_rsa.pub key to take much of the pain out of connecting to boxes. I also run setup with swarm enabled.
- set up an ssh tunnel to the jumpbox (following is platform specific) `ssh -N -p 22 azureuser@{jumpboxip} -L 5901:localhost:5901`
- open the VNC Viewer to localhost:1 with the password of password
- From the Jumpbox:
 - ensure the swarm framework is available via the mesos ui at http://c1master1:5050
 - if swarm framework is not setup, run through setup via [swarm mesos readme](https://github.com/docker/swarm/tree/master/cluster/mesos) while ssh into c1master1.
  I've ran into a couple times when the swarm framework was not working and needed to do this so make sure to do it before the demo.
 - From the master, you should be able to `sudo docker -H tcp://10.0.0.5:2376 info`
 - Show docker containers running, being spread throughout the cluster, and responding to regular docker commands.
  - Perhaps something like `sudo docker run -d -p 80 -c 2 -m 256m tutum/hello-world` which requires 2 cpu and 256mb mem.
