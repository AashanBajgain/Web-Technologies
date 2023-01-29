// document.getElementById("p1").innerHTML="Hey this is scam!!!";
// document.getElementById("p1").style.backgroundColor="aqua";
// document.getElementsByClassName("p1")[0].innerHTML="Hey, This is a SCAMMMMMM!!!"
document.getElementsByTagName("h1")[1]
innerHTML="getElementsByTagName";
var select = document.getElementsByClassName("p1");
for(var i=0;i<=select.length;i++){
    select[i].innerHTML="Hey, This is a SCAMMM";
    select[i].style.cssText="background-color:plum; color:biseque; font-size:30px"
}