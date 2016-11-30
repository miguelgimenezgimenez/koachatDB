'use strict';

const fs = require('fs');
// const dbFilePath = __dirname + '/db.json';
const db = require('../config/db.js');

const Message = {};

Message.getAllMessages = function () {
  return new Promise(function (resolve, reject) {
    db.query('SELECT* from messages', function (err, rows, fields) {
      if (err) reject(err);
      // console.log(rows);
      resolve(rows);
    });
  });
};


Message.storeMessage = function (content) {
  // console.log(content);
  db.query(`INSERT into messages (user, timestamp, content) VALUES ('${content.user}','${content.time}','${content.content}');`);

};
module.exports = Message;
