# Azure Cloud Roadshow OSS Demos

This is a collection of simple open source demos for Azure that illustrate some of the different tools and services
available and how you can use them to compose open stack applications in Azure. We start with the simples case, the
Azure MarketPlace and progressively increase in complexity and nuance.

Each of these demos is explained in further detail within their respective directories. Please see the following:
- [101 - MarketPlace Scalable Wordpress Demo](./demos/101_marketplace/readme.md)
- [102 - PaaS Node.js WebApp Demo](./demos/102_paas/readme.md)
- [103 - Scalable Apache / Memcache Demo](./demos/103_iaas/readme.md)
- [201 - Internet of Things Hub](./demos/201_iot/readme.md)
- [202 - Azure Container Services](./demos/202_acs/readme.md)

## Getting Started
Copy the env.sh.example to .env.sh and fill in with empty environment variables. These will be used for credentials when
needed by the scripts.

### You will also need the following tools
- Azure CLI
- tmux and tmuxinator
- Docker Toolbox
- (optional, but recommended) Ansible
- (optional) an IoT device
