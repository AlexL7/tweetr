"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tweeter";

console.log(`Connecting to MongoDB running at: ${MONGODB_URI}`);


let collection;

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log('Could not connect! Unexpected error. Details below.');
    throw err;
  }
  console.log(`Successfully connected to DB: ${MONGODB_URI}`);
  collection = db.collection("tweets");
// const initialTweets = require("./tweets");
// const db = { tweets: initialTweets };
});


const dbMethods = {

  saveTweet: (data) => {
     collection.insertOne(data);
     return true;
  },

  getTweets: (_cb) => {
     collection.find().toArray((err,results) =>{
      _cb(results.sort(function(a, b) { return a.created_at - b.created_at }));;
     });
  }

 }

module.exports = {

  connect: (onConnect) => {

    onConnect(dbMethods);

  }

}
