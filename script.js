var arr = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "class": "child-of-10"}];
    
for (var i = 0; i < arr.length; i++){
  document.write("<br><br>array index: " + i);
  var obj = arr[i];
  for (var key in obj){
    var value = obj[key];
    document.write("<br> - " + key + ": " + value +"<br>");
  }
}

var mycars = [{name:'Susita'}, {name:'BMW'}];

for (var car of mycars) 
{
  document.write(car.name + "<br />");
}

mycars.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
    });
    document.write(car.name + "<br />");
});
    