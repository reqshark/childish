
//var os = require('os');
//var typicalUbuntuAddress = os.networkInterfaces().eth0[0].address;


function consolidateMsg(message){
  //socket.send(message)

  console.log(message)
}


var p1 = require('child_process').fork('./p1');


p1.on('message',function(m){consolidateMsg(m)});