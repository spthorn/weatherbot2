var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.set('port', (process.env.PORT || 9001)); // in production, can use the [PORT] env variable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var versionString = "weatherbot2 v1.1.2";

// Show version when visiting the app URL
app.get('/', function(req, res){
    res.send(versionString);
});

// All Slack Slash commands send a POST
app.post('/post', function(req, res){
    var command = req.body.text;
    
    if (command == "help") {
        replyToSlack(res, versionString + "\nEmpty command shows current office weather\n`zip` shows current weather at the specified zip code\n`city,state` shows current weather at the specified location");
    }
    else if (command == "") {
        // Use the Node request(https://github.com/request/request) library
        // to pass in our monitor URL, and send it's response back to Slack.
        var monitorURL = "http://spthorn.com/slackMonitorQuery.php";
        request(monitorURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                replyToSlack(res, body);
            }
        });
    }
    else if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(command) == true) {
        // Send the request to OpenWeatherMap as a zipcode parameter to their
        // current weather API, and return the result to Slack. 
        var apiURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + command + "&APPID=126dc125b131a57e314e3376242514a5&units=imperial";
        request(apiURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                var text = data.name + "(" + data.sys.country + "): " + data.weather[0].main + " " + data.main.temp + "° " + data.main.humidity + "% humidity";
                replyToSlack(res, text);
            }
        });
    }
    else {
        // Send the request to OpenWeatherMap as a query parameter to their
        // current weather API, and return the result to Slack. 
        var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + command + "&APPID=126dc125b131a57e314e3376242514a5&units=imperial";
        request(apiURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                var text = data.name + "(" + data.sys.country + "): " + data.weather[0].main + " " + data.main.temp + "° " + data.main.humidity + "% humidity";
                replyToSlack(res, text);
            }
        });
    }
});

// Have Express create a server and ask Node to listen on a specific port
app.listen(app.get('port'));

// Helper function
replyToSlack = function(res, text) {
    var responseBody = {
        response_type: "in_channel",
        text: text
    };
    res.send(responseBody);
}