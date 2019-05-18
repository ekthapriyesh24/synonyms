/*function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}*/
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
function add(){
var x=document.getElementById("word").value;
var y="https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20190517T151428Z.57f3b2b9b67788aa.eea719a7b2556e8fbe8713d46583cabadafef188&lang=en-en&text="+x;
var json_obj = JSON.parse(Get(y));
var dd=JSON.stringify(json_obj);
document.getElementById("demo").innerHTML = dd;
}