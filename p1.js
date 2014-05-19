var data = {};

data.pid = process.pid;

setTimeout(function(){
  //wait a second
  data.uptime = process.uptime();
  process.send(data);
},1000)
