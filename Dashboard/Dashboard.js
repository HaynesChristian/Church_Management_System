
// function display()
// {
// 	alert("Connected");
// }

function member_detail()
{
	document.getElementById("content").src= "MemberManagement/MemberDetails.html";
  //document.getElementById("content").focus();
  document.getElementById("content").scrollIntoView();
}

function income_expense()
{
}
function suppliers()
{
  document.getElementById("content").src= "SupplierDetailsManagement/Supplier.html";
  //document.getElementById("content").focus();
  document.getElementById("content").scrollIntoView()	
}
function ss()
{

}
function doc_store()
{

}
function certi_fmt()
{

}
function chg_pwd()
{

}

//Digital clock code starts
function startTime() 
{
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + " : " + m + " : " + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) 
{
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

//Digital clock code ends