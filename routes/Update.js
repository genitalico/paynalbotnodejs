var express = require('express');
var router = express.Router();
var request = require('request');
var gitlabTransactions = require('../paynalBotTransactions/messages')
router.post('/', function(req, res, next) {
    var Model = {
        ChatId: req.body.message.chat.id,
        Header: "Your ID Telegram Is",
        Body: req.body.message.chat.id
    };
    gitlabTransactions.SendMessageWithHeader(Model);
    res.contentType('application/json');
    res.status(200);
    res.end();
});
module.exports = router;