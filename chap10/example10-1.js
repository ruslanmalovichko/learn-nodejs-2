// var MongoClient = require('mongodb').MongoClient;

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'exampleDb';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = await db.collection('widgets');
  await collection.deleteMany({});

  var widget1 = { title : 'First Great widget',
                  desc : 'greatest widget of all',
                  price : 14.99 };
  var widget2 = { title : 'Second Great widget',
                  desc : 'second greatest widget of all',
                  price : 29.99 };

  await collection.insertOne(widget1, {w:1});
  await collection.insertOne(widget2, {w:1});

  var docs = await collection.find({}).toArray();
  console.dir(docs);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

