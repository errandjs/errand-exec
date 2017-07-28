var kue = require('kue');
var queue = kue.createQueue();
var child_process = require('child_process');

function graceful() {
  process.exit(0);
}

process.on('SIGTERM', graceful);
process.on('SIGINT' , graceful);

queue.process('errand-exec', function(job, done){
  var result = child_process.execSync(job.data.request.command);
  console.log(result.toString());
  done();
});
