# Mongo ElasticSearch ETL example

This project shows an example of syncing a mongo with ElasticSearch with `transporter`

## Getting Started

Clone this repo in your local machine

### Prerequisites

The file `bootstrap.sh` contains the proper installation of Java 8 (Elastic Search requirement)
In addition you'll need to install
- [ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html). Used v6
- [MongoDB](https://www.howtoforge.com/tutorial/install-mongodb-on-ubuntu-16.04/). Used v3.2
- [transporter](https://github.com/compose/transporter)
  - [Installation](https://www.digitalocean.com/community/tutorials/how-to-sync-transformed-data-from-mongodb-to-elasticsearch-with-transporter-on-ubuntu-14-04#step-7-%E2%80%94-installing-transporter) 
  - NOTE: Make sure to use GO 1.7+, the above link uses 1.2.

## Deployment

Fill database:
```
$ mongoimport --db test --collection things --drop --file things.json
```

Run transporter to sync with elastic search
```
$ transporter run pipeline.js
```
