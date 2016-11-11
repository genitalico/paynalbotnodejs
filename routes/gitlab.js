var express = require('express');
var router = express.Router();
var gitlabTransactions = require('../paynalBotTransactions/messages')
router.post('/PushEvents/:ChatId', function(req, res, next) {
    var object_kind = ['#GitLab ', req.body.object_kind, '\n'].join('');
    var author = ['*Author: *', req.body.user_name, '\n'].join('');
    var project = ['*Project: *', req.body.project.name, '\n'].join('');
    var totalCommits = ['*Total Commits: *', req.body.total_commits_count, '\n'].join('');
    var branch = ['*Branch: *', req.body.ref.replace('refs/heads/', ''), '\n'].join('');
    var text = [object_kind, author, project, branch, totalCommits].join("");
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