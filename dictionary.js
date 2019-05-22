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
    if(document.getElementsByTagName("UL")[0]!=null)
    {
        var f=document.getElementsByTagName("UL")[0];
        f.parentNode.removeChild(f);
    }
var list = document.createElement("ul");
for (var i in fi) {
  var anchor = document.createElement("a");
  anchor.innerText = fi[i];
  var elem = document.createElement("li");
  elem.appendChild(anchor);
  list.appendChild(elem);
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
