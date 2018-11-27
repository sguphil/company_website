
var Admin = require('../controller/admin/admin');


module.exports = function(app) {

  app.get('/login',Admin.login);
  app.get('/register',Admin.register);
  app.get('/admin', Admin.admin);
  app.post('/admin/add_news', Admin.add_news);
  app.post('/admin/get_news', Admin.get_news);
  app.post('/admin/news_content', Admin.get_news_detail);
  app.post('/admin/news_del', Admin.del_one);
  app.post('/admin/add_recruit', Admin.add_recruit);
  app.post('/admin/get_recruits', Admin.get_recruits);
  app.post('/admin/recruit_content', Admin.get_recruit_content);
  app.post('/admin/recruit_del', Admin.del_recruit);
  app.post('/admin/add_quit', Admin.add_quit);
  app.post('/admin/get_quits', Admin.get_quits);
  app.post('/admin/quit_del', Admin.del_quit);
  app.post('/admin/post_user', Admin.add_admin);
  app.post('/admin/get_users', Admin.get_users);
  app.post('/admin/user_del', Admin.user_del);
  app.post('/login',Admin.checkUser);
  app.post('/register',Admin.post_register);
  app.get('/logout',Admin.logout);
  app.post('/authorize',Admin.authorize);
  app.post('/admin/get_feedbacks',Admin.get_feedbacks);
  app.post('/admin/deal_feedbacks',Admin.deal_feedbacks);
  app.get('/admin/check_feedbacks', Admin.check_feedbacks);


};