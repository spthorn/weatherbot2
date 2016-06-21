var express = require('express');
var app = express();
var url = require('url');
var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001)); // in production, use the [PORT] env variable

// Just for grins, show text when visiting root of the app
app.get('/', function(req, res){
    res.send('It works!');
});

// All Slack Slash commands send a POST
app.post('/post', function(req, res){
    // Use the Node request(https://github.com/request/request) library
    // to pass in a URL, pull out the first link from the JSON that is
    // returned, and construct a proper response back to Slack.

    var monitorURL = "http://spthorn.com/slackMonitorQuery.php";
    request(monitorURL, function (error, response, body) {
	      if (!error && response.statusCode == 200) {
            var responseBody = {
                response_type: "in_channel",
                text: body
            };
            res.send(responseBody);
    	  }
    });
});

// Tell node which port to listen on
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
