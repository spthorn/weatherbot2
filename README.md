# WeatherBot

_A Slackbot that displays the current office weather_.

This Slackbot receives input through a [slash command](https://api.slack.com/slash-commands) and sends a request to an API.

## Installation

Clone the repo and then install dependencies:

    git clone git@github.com:spthorn/weatherbot2.git
    cd weatherbot2
    npm i


Setup the server (I used Heroku):

    heroku create weatherbot2


Setup Slack slash command:

* Goto `http://[your-slack-team].slack.com/apps/manage/custom-integrations` and add a slash command.
* Fill in the fields:
  * _Command_: the name of your slash command (ex: `/weatherbot`)
  * _URL_: The URL to request when the slash command is run (ex: `https://my-slackbot.herokuapp.com/post`)
  * _Method_: POST
  * _Customize Name_: The name of your Slackbot
  * _Customize Icon_: A custom icon or an emoji
  * _Autocomplete help text_: Helps users when they start typing `/`
  * _Descriptive Label_: Provides extra context


## Usage

In Slack, send slash commands to /weatherbot:

    /weatherbot
    /weatherbot status


## License

The MIT License (MIT)
Copyright (c) 2016 Andrew Mager

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
