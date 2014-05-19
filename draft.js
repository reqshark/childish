
function consolidateMsg(message){
  //socket.send(message)

  if(message.pid)
    console.log(message)
}


var p1 = require('child_process').fork('./p1');


p1.on('message',function(m){consolidateMsg(m)});