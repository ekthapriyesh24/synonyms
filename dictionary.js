$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); 
    xmlHttp.send(null);
}
var fi=[],i=1,json_obj;
function add(){
var x=document.getElementById("word").value;
var y="https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20190517T151428Z.57f3b2b9b67788aa.eea719a7b2556e8fbe8713d46583cabadafef188&lang=en-en&text="+x;
httpGetAsync(y,function parser(vals)
{
    json_obj=JSON.parse(vals);
});
printValues(json_obj);
createlist(fi);
fi=[];
i=1;
}
function createlist(fi)
{
    if(document.getElementById("tl")!=null)
    {
        var f=document.getElementById("tl");
        f.parentNode.removeChild(f);
    }
var list = document.createElement("div");
var att = document.createAttribute("class");
var att2 = document.createAttribute("id");
att.value = "list-group";
att2.value = "tl";
list.setAttributeNode(att2);
list.setAttributeNode(att);
for (var i in fi) {
  var anchor = document.createElement("a");
  var att4 = document.createAttribute("href");
  att4.value = "#";
  anchor.setAttributeNode(att4);
  anchor.innerText = fi[i];
  var att1 = document.createAttribute("class");
  att1.value = "list-group-item list-group-item-action text-center text-light bg-dark";
  anchor.setAttributeNode(att1);
  list.appendChild(anchor);
}
document.body.appendChild(list);
}
function printValues(obj) {
    for(var k in obj) {
        if(i>=10)
        {
            return;
        }
        if(obj[k] instanceof Object) {
            printValues(obj[k]);
        } else{
            if(k=="text")
            {
            i++;
            fi.push(obj[k]);
            }
        }
    }
};
