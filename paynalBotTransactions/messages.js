var request = require('request');
var urlBot = require('../paynalBotTransactions/constants').UrlBot;
exports.SendMessageWithHeader = function(Model) {
    var text = "*" + Model.Header + "*" + "\n" + Model.Body;
    request.post(urlBot + '/sendMessage', {
        json: {
            "chat_id": Model.ChatId,
            "text": text,
            "parse_mode": "Markdown"
        }
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            return;
        }
    });
}