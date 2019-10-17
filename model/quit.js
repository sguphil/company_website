/**
 * 公示信息  --公告栏
 */
var mongoose=require('mongoose');

var  quitschema=new mongoose.Schema({
    //职位
    name:String,
    //部门
    department:String,
    //time
    time:String
});

mongoose.model('Quit',quitschema);