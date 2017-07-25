var kue = require('kue');
var queue = kue.createQueue();
var cmd=require('node-cmd');


function graceful() {
  process.exit(0);
}

process.on('SIGTERM', graceful);
process.on('SIGINT' , graceful);

queue.process('errand-exec', function(job, done){
  cmd.get(job.data.request.command,function(err, data, stderr){
    console.log(data);
	done();
  });
});
