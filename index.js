var express = require('express');
var app = express();
const _=require('lodash');
const items=[1,[2,[3,[4]]]]
const newitems=_.flattenDeep(items)
console.log(newitems);
app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);