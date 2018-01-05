function logon() {
  var Request = new Object();
  Request = GetRequest(); 
  var loginName = Request["loginName"];
  var exten=Request["exten"];
  var password = Request["password"];
  var extenType =Request["loginType"];
  var pbxid =Request["pbxid"];
  var c_code=Request["c_code"]; 
 	var config = {
 		monitor : true,
 		proxy_url : "http://127.0.0.1:8080/",
 		extenType : extenType,
 		password : password,
 		user : loginName,
 		busyType : "2",// 登录就忙的状态
 		pbxNick:pbxid,
 		curPbx:pbxid,
 		pbx_in_ip:pbxid,
 		accountId:c_code,
 		exten:exten
 	};
 	//btndisable();
 //	console.info(config.pbx_in_ip); 
    phone_register(config);   
} 
function logout() {
    var queueRemove = true; 
    btndisable();
    phone_exit(queueRemove);   
} 
function GetRequest() {
   var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}

//转接时的操作
 function transfer() {
   var tel=prompt("请输入电话:","");
   if(tel== null){ 
      return false;
   }
   if(tel =="")
   {
      alert("电话不能为空！");
      return false;
   }    
   document.getElementById('transferEnable').style.display='none';
   document.getElementById('transfercancel').style.display='';
   phone_transfer("9"+tel, "number")
 }
 
 //取消转接时的操作
 function transfercancel(){
        document.getElementById('transfercancel').style.display='none';
        phone_cancelTransfer();
 }
  //咨询时的操作
  function Consult() {
   var tel=prompt("请输入电话:","");
   if(tel== null){ 
      return false;
   }
   if(tel==''){
      alert("电话不能为空！");
      return false;
   }
   phone_consult("9"+tel, "number")
 }
//小休
 function rest(){
     if(document.getElementById('btnRest').style.display=="none"){
        phone_setBusy(false,'2');
        document.getElementById('btnRest').style.display='';
        document.getElementById('btnNoRest').style.display="none";
     }else{
        phone_setBusy(true,'2');
        document.getElementById('btnRest').style.display="none";
        document.getElementById('btnNoRest').style.display='';
     }
 }
 //忙碌
 function busy(){
     if(document.getElementById('btnBusy').style.display=="none"){
        phone_setBusy(false,'1');
        document.getElementById('btnBusy').style.display='';
        document.getElementById('btnNoBusy').style.display="none";
     }else{
        phone_setBusy(true,'1');
        document.getElementById('btnBusy').style.display="none";
        document.getElementById('btnNoBusy').style.display='';
     }
 }
 function btndisable(){
        document.getElementById('btnBusy').disabled=true;
        document.getElementById('btnNoBusy').disabled=true;
        document.getElementById('btnRest').disabled=true;
        document.getElementById('btnNoRest').disabled=true;
 }