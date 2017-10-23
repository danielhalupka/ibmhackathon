const express = require('express')
const app = express()
const mongo = require('mongodb').MongoClient;

let barcodes,userOrders,marketOrders,users;


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/market/orders',function(req, res){
  marketOrders.find().sort({_id:1}).toArray(function(err, res){
    if(err){
        throw err;
    }

    res.send(JSON.stringify(res));
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})

mongo.connect('mongodb://xit.me:12345/scan2shop', function(err, db){
  if(err){
      throw err;
  }
  console.log('MongoDB connected');
  barcodes = db.collection('barcodes');
  userOrders = db.collection('userOrders');
  marketOrders = db.collection('marketOrders');
  users = db.collection('users');


  /* Connect to Socket.io
  client.on('connection', function(socket){
      let chat = db.collection('chats');

      // Create function to send status
      sendStatus = function(s){
          socket.emit('status', s);
      }

      // Get chats from mongo collection
      chat.find().limit(100).sort({_id:1}).toArray(function(err, res){
          if(err){
              throw err;
          }

          // Emit the messages
          socket.emit('output', res);
      });

      // Handle input events
      socket.on('input', function(data){
          let name = data.name;
          let message = data.message;

          // Check for name and message
          if(name == '' || message == ''){
              // Send error status
              sendStatus('Please enter a name and message');
          } else {
              // Insert message
              chat.insert({name: name, message: message}, function(){
                  client.emit('output', [data]);

                  // Send status object
                  sendStatus({
                      message: 'Message sent',
                      clear: true
                  });
              });
          }
      });

      // Handle clear
      socket.on('clear', function(data){
          // Remove all chats from collection
          chat.remove({}, function(){
              // Emit cleared
              socket.emit('cleared');
          });
      });
  });*/
});