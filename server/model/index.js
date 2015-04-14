var dateUtil=require('./../util/util.date');

exports.initUser=function(_username,_email,_passwd){
  return{
    username:_username,
    thumbnail:null,
    credentials:{
      email:_email,
      passwd:_passwd, //encrypt the passwd
    },
    reg_date:dateUtil.todayAsString(),
    newUser:true
  }
}

exports.initThread=function(_name,_desc,_mode,_ownerId){
  return{
    name:_name,
    desc:_desc,
    mode:_mode,
    owner:{
      id:_ownerId,
      datetime:dateUtil.todayAsString()
    }
  }
}
