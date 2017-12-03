# Semantic Service Contract and Discovery

Semantic Service Contract and Discovery (SSCD) provides a service discovery service that allows services be discovered by their logical functions, such as "order pizza" and "detect motion".

In addition to functional requirements, the requester also can describe other non-funcitonal requirements such as SLA, pricing, publisher, region, and authentication constraints.

SSCD offers two APIs: one to translate a natural language phrase into a structured *intent* object; another takes an *intent* object and returns a service description that can fullfill that intent. 

SSDC embeds service registry in a container (hbai/skynet-sscd) so that service discovery can be performed without a centralized service. New service registry entries are taken in as GitHub pull requests, and are published to Docker Hub as a new image version through an auto-build pipeline.

## Usage

1. Launch SSCD server

```bash

sudo docker run -d -p 8181:8181 hbai/skynet-sscd:latest

```
2. Translate statement to intention (OPTIONAL)

```bash

GET http://localhost:8181?statement=detect%20motion

```
The request returns

```json
{
    "predicate": "detection.data",
    "object": "motion.data"
}
```

3. Discover a service

```bash
POST http://localhost:8181/discover

BODY

{
    "predicate": "detection.data",
    "object": "motion.data"
}

```

the request returns

```json
{
    "id": "hbai/skynet-edgedetection:1",
    "type": "dokcer",
    "uri": "hbai/skynet-edgedetection:1",
    "contract-type": "semantic",
    "contract-protocol": "HTTP",
    "targets":
        [
            {"target": "camera.device"},
            {"target":"disk.device"}
        ],
    "intentions":
        [
            {"predicate": "detection.data",
            "object": "motion.data"}
        ]
}
```

## Use Skynet

The easiest to semantically discover and consume a service is to use a Skynet Hovercraft. 

```python
import skynet
craft = skynet.launchHovercraft()
craft.run("motion detection").on("/devices/video0").continuous()
```