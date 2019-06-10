var express = require('express');
var app = express();

app.get('/', function(req, res) {
    var d1 = new Date();
    var str = '<h1>Hello Node + Express</h1>';
    str += '<h3>' + d1.toTimeString() + '</h3>'
    str += '<a href="/react">Go react app!</a>';
    res.send(str);
});


var history = require('connect-history-api-fallback');

app.use(
    history({
        index: '/react'
    })
);
app.use('/react', express.static('react'));

var server = app.listen(80, function(){
    console.log("server has started!!")
})

