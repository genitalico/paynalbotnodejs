var express = require('express');
var router = express.Router();
var sendMessageWithHeader = require('../paynalBotTransactions/messages').SendMessageWithHeader;
router.post('/:ChatId', function(req, res, next) {
    var Model = req.body;
    Model.ChatId = req.params.ChatId;
    sendMessageWithHeader(Model);
    res.contentType('application/json');
    res.status(200);
    res.end();
});
module.exports = router;