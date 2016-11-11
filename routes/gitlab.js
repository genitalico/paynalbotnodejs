var express = require('express');
var router = express.Router();
var gitlabTransactions = require('../paynalBotTransactions/messages')
router.post('/PushEvents/:ChatId', function(req, res, next) {
    var text = ["#GitLab ", req.body.object_kind, "\n*", req.body.user_name, "*\n", req.body.project.name, "\n", "Total Commits: ", req.body.total_commits_count].join("");
    var Model = {
        ChatId: req.params.ChatId,
        Header: "Push Event",
        Body: text
    };
    gitlabTransactions.SendMessageWithHeader(Model);
    res.contentType('application/json');
    res.status(200);
    res.end();
});
module.exports = router;