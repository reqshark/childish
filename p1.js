var data = {};

data.firstPart = 'some data';

data.secondPart = process.pid;

process.send(data);