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
  * _Command_: the name of your slash command (e.g. `/weather`)
  * _URL_: The URL to request when the slash command is run (e.g. `https://my-slackbot.herokuapp.com/post`)
  * _Method_: POST
  * _Customize Name_: The name of your Slackbot (e.g. `weatherbot`)
  * _Customize Icon_: A custom icon or an emoji
  * _Autocomplete help text_: Helps users when they start typing `/`
  * _Descriptive Label_: Provides extra context


## Usage

In Slack, send slash commands to /weatherbot:

    /weather

## Props
Thanks to Andrew Mager(https://mager.co/how-to-write-a-slackbot-in-40-lines-of-code-52cf0c4fcf42#.fsarcotkl)
for the framework.