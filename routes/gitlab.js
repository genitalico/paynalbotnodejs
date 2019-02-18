var express = require('express');
var router = express.Router();
var paynalBotTransaction = require('../paynalBotTransactions/messages')
const gitlabTransaction = require('../gitlabTransactions/gitlabTransaction');
router.post('/PushEvents/:ChatId', function (req, res, next) {
    
    let text = gitlabTransaction.PushEvent(req.body);

    let Model = {
        ChatId: req.params.ChatId,
        Header: 'GitLab: '+ req.body.object_kind,
        Body: text
    };
    paynalBotTransaction.SendMessageWithHeader(Model);
    res.contentType('application/json');
    res.status(200);
    res.end();
});

router.post('/hooks/:ChatId',function(req,res,next){

    if(req.body.object_kind == 'push'){
        let text = gitlabTransaction.PushEvent(req.body);
        let Model = {
            ChatId: req.params.ChatId,
            Header: 'GitLab: '+ req.body.object_kind,
            Body: text
        };
        paynalBotTransaction.SendMessageWithHeader(Model);
    }


    if(req.body.object_kind == 'pipeline'){
        let text = gitlabTransaction.Pipeline(req.body);
        let Model = {
            ChatId: req.params.ChatId,
            Header: 'GitLab: '+ req.body.object_kind,
            Body: text
        };
        paynalBotTransaction.SendMessageWithHeader(Model);
    }


    //////////////////////////////////////////////////////
    res.contentType('application/json');
    res.status(200);
    res.end();

});

module.exports = router;