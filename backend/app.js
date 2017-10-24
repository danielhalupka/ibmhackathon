const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(process.env.PORT || 3000).sockets;
let barcodes, userOrders, marketOrders, users;
//mongodb://xit.me:12345/scan2shop
mongo.connect('mongodb://xit.me:12345/scan2shop', function (err, db) {
  if (err) {
    throw err;
  }

  console.log('MongoDB connected');

  barcodes = db.collection('barcodes');
  userOrders = db.collection('userOrders');
  marketOrders = db.collection('marketOrders');
  users = db.collection('users');

  client.on('connection', function (socket) {
    console.log('user connected');
    sendStatus = function (s) {
      socket.emit('status', s);
    }

    socket.on('get market orders', function (data) {
      marketOrders.find().sort({ _id: 1 }).toArray(function (err, res) {
        if (err) {
          throw err;
        }
        socket.emit('market orders', res);
      });
    });

    socket.on('post new market order',function(data){
      console.log(data);
      marketOrders.insert({date: new Date(), barcodes: data}, function(){
        sendStatus({
            message: 'Message sent',
            clear: true
        });
      });
    });

    socket.on('get product data from barcode',function(data){
      barcodes.findOne({ 'payload' : data },function(err,res){
        if(err){
          throw err;
        }
        socket.emit('single product',res);

      })
    });

    socket.on('get product info',function(data,callback){
      barcodes.findOne({ 'payload' : data },function(err,res){
        if(err){
          throw err;
        }
       callback(res);

      })
    })



  });
});



