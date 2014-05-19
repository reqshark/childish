var data = {};

data.pid = process.pid;
data.fid = process.argv[1].split('/')[process.argv[1].split('/').length-1];

setTimeout(function(){
  //wait a second
  data.uptime = process.uptime();
  process.send(data);
},1000)
