# PaynalBot

## Configuration

In the file paynalBotTransactions/constants.js, change the variable ***exports.UrlBot***.

The UrlBot is the: `https://api.telegram.org/bot<token>/`

Or you can added enviroment variable `TELEGRAM_URL_BOT`

## Execute

$ npm install 

$ node /bin/www

## Funtionalities

Actually PaynalBot accept the followings requests:

[Telegram Update](https://core.telegram.org/bots/api#getting-updates)

At the moment only accept the command: `/help`.

/help return the chat_id number.

You can Send a message with **Header** and **body**, this function is very simple

**Example:**

`curl -X POST \`
  `https://your_server/api/SendMessage/chat_id \`
  `-H 'Content-Type: application/json' \`
  `-d '{`
    `"Header" : "Orochi Server",`
    `"Body" : "Backup Gitlab"`
`}'`

## Telegram WebHooks

PaynalBot accept the followings gitlab web hooks:

From the Url: `https://your_server/api/Gitlab/hooks/chat_id`

1. [Push Events](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#push-events) 
2. [Pipeline events](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#pipeline-events)

