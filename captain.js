/**
  Change the `github.on()` event to whatever you need.
  
  Default is to watch pushes on a given REPONAME.
  (Change that to the name of your repo)
*/

var githubhook = require('githubhook');
var github = githubhook({
  port: 3030,
  logger: {
    log: function(log) {
      console.log(log);
    },
    error: function(error) {
      console.log(error);
    }
  }
});

github.listen();

github.on('push:REPONAME', function(ref, data) {
  var deploySh = require('child_process')
    .spawn('sh', ['hook.sh'], {
      cwd: process.env.PWD
    });
});