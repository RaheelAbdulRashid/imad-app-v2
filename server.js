var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var article_one={
    title:'Article One | Raheel Mukadam',
    heading:'Article One',
    date:'25 March 2017',
    content:   `<p>
                    This is the content This is the content This is the content This is the content This is the content This is the content
                     This is the content This is the content This is the content This is the content This is the content This is the content
                  </p>
                <p>
                    This is the content This is the content This is the content This is the content This is the content This is the content
                     This is the content This is the content This is the content This is the content This is the content This is the content
                </p>
                <p>
                    This is the content This is the content This is the content This is the content This is the content This is the content
                     This is the content This is the content This is the content This is the content This is the content This is the content
            </p>`
    
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    
var htmlTemplate=
   ` <!DOCTYPE html>
<html>
    <head>
        ${title}
        <link href="ui/style.css*">
    </head>
    <body>
     <div class="container">   
        
            <a href="/">Home</a>
        
        <hr/>
        
        <h3>
            ${heading}
        </h3>
        
        <div>
            ${date}
        </div>
            
            <div>
                ${content}
            </div>
     </div>       
    </body>
</html>`;
}




app.get('/article_one', function(req,res){
   res.send(createTemplate(article_one));
});

app.get('/article_two', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});

app.get('/article_three', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
