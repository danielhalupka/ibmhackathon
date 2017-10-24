const mongo = require('mongodb').MongoClient;
const io = require('socket.io').listen(process.env.PORT || 3000);
const client = io.sockets;
io.set('origins', '*:*');
let barcodes, userOrders, marketOrders, users;
//mongodb://xit.me:12345/scan2shop
mongo.connect('mongodb://admin:ZAMGABODRDCKBSEX@sl-us-south-1-portal.10.dblayer.com:25568,sl-us-south-1-portal.9.dblayer.com:25568/admin?ssl=true', function (err, db) {
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
        console.log(data);
        if(err){
          throw err;
        }
        socket.emit('single product',res);

      })
    });

    socket.on('get product info',function(data,callback){
      barcodes.findOne({'payload' : ""+data.barcode},function(err,res){
        if(err){
          throw err;
        }
        res = res || {};
          res['index'] = data.index;
        
       
       callback(res);

      })
    })



  });
});



