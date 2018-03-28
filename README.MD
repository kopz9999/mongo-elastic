# Project Title

This project shows an example of syncing a mongo replica set with ElasticSearch with `mongo-connector`.

## Getting Started

Clone this repo in your local machine

### Prerequisites

The file `bootstrap.sh` contains the proper installation of Java 8 (Elastic Search requirement)
In addition you'll need to install
- (ElasticSearch)[https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html]. Used v6
- (MongoDB)[https://www.howtoforge.com/tutorial/install-mongodb-on-ubuntu-16.04/]. Used v3.2

Mongo must be launched with a replica set

## Deployment

Fill database:
```
$ mongoimport --db test --collection things --drop --file things.json
$ mongo-connector -m localhost:27017 -t localhost:9200 -d elastic2_doc_manager
```

