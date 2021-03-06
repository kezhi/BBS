var express = require('express');
var router = express.Router();
var topic = require('../controllers/topic');
var comment = require('../controllers/comment');
var users = require('../controllers/users');
var check_session = require('../middleware/check_session_is_expired');

/* GET home page. */
router.post('/topic/post', check_session,topic.api.topic_post);
router.get('/topic/list', topic.api.topic_list);
router.get('/topic/list/:uid', topic.api.topic_list);
router.get('/topic/:id', topic.api.view);
router.get('/topic/del/:id', check_session, topic.api.del);
router.post('/topic/edit/:id', check_session, topic.api.edit);
router.post('/comment/post', check_session,comment.api.comment_post);
router.get('/comment/list/:id', comment.api.list);
router.post('/users/register', users.api.register);
router.post('/users/login', users.api.login);
router.get('/users/userinfo',check_session,users.api.userinfo);
router.get('/users/userinfo/:id',users.api.userinfo);
router.post('/users/setting',check_session,users.api.setting);
router.post('/uploadimage',check_session,users.api.uploadimage);
router.get('/users/logout',users.api.logout);












module.exports = router;
