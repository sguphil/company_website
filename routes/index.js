var Index = require('../controller/web/index');



module.exports = function(app) {
  app.get('/', Index.index);
  app.post('/getKKK', Index.getKKK);

  app.get('/company_intro', Index.company_intro);
  app.get('/culture', Index.culture);
  app.get('/organize', Index.organize);
  app.get('/process', Index.process);

  app.get('/company_dynamic', Index.company_dynamic);
  app.get('/media_report', Index.media_report);
  app.get('/activity_report', Index.activity_report);

  app.get('/services1', Index.services1);
  app.get('/services2', Index.services2);
  app.get('/services3', Index.services3);

  app.get('/partner', Index.partner);

  app.get('/recruit', Index.recruit);
  app.get('/benefits', Index.benefits);
  app.get('/staff_style', Index.staff_style);
  app.get('/quit_notice', Index.quit_notice);

  app.get('/contact_us', Index.contact_us);

  app.get('/web/get_news', Index.get_news);
  app.get('/web/get_recruits', Index.get_recruits);
  app.get('/web/get_quits', Index.get_quits);
  app.post('/web/get_news_by_Category', Index.get_news_by_Category);

  app.get('/news_detail/:id', Index.get_news_detail);
  app.post('/news_detail/:id', Index.post_news_detail);
  app.get('/media_report_detail/:id', Index.get_media_report_detail);
  app.post('/media_report_detail/:id', Index.post_media_report_detail);
  app.get('/activity_report_detail/:id', Index.get_activity_report_detail);
  app.post('/activity_report_detail/:id', Index.post_activity_report_detail);

  app.post('/web/get_recruits_page', Index.get_recruits_page);
  app.post('/web/get_quit_page', Index.get_quit_page);

  app.get('/recruit_requirment/:id', Index.get_recruit_requirment);
  app.post('/recruit_requirment/:id', Index.post_recruit_requirment);

  app.post('/post_feedback', Index.post_feedback);

};
