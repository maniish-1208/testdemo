var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
}
//program 2
for(var i=0;i<data.length;i++){
    console.log(`Name:${data[i].name} Capital:${data[i].capital}`);
}


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
 console.log(data);

 for(var i=0;i<data.length;i++)
console.log(`name:${data[i].name} latlng:${data[i].latlng} latlng:${data[i].latlng}`);
}


var request=new XMLHttpRequest();
request.open("GET","https://www.anapioficeandfire.com/api/books/1")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
 console.log(data);


console.log(`authors:${data.author} numberOfPages:${data.numberOfPages} publisher:${data.publisher} bookisbn:${data.bookisbn}`);
}



var request=new XMLHttpRequest();
request.open("GET","https://www.anapioficeandfire.com/api/books/1")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
 console.log(data);



console.log(`authors:${data.author} numberOfPages:${data.numberOfPages} publisher:${data.publisher} bookisbn:${data.bookisbn}`);
}



//
let a =[

{
    name:"a",
    dept:"cse",
    mark:[1,2,3,4,5],
},
{
    name:"b",
    dept:"cse",
    mark:[1,124,43,14,45],
},
{
    name:"c",
    dept:"cse",
    mark:[81,82,3,82,85],
},
];





//extract details of the countries whoes region is in ASIA
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
}