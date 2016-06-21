var express = require('express');
var app = express();
var request = require('request');

app.set('port', (process.env.PORT || 9001)); // in production, can use the [PORT] env variable

// Show version when visiting the app URL
app.get('/', function(req, res){
    res.send('weatherbot2 v1.0.2');
});

// All Slack Slash commands send a POST
app.post('/post', function(req, res){
    // Use the Node request(https://github.com/request/request) library
    // to pass in our monitor URL, and send it's response back to Slack.
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

// Have Express create a server and ask Node to listen on a specific port
app.listen(app.get('port'));
