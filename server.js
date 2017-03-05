var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config={
    user:'raheelabdulrashid',
    database:'raheelabdulrashid',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool=new Pool(config);
app.get('/test_db',function(req,res){
   //make select request 
   //return response
   pool.query('SELECT*FROM test_db',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else{
           res.send(JSON.stringify(result));
       }
   });
   
});




var articles={
    'article_one':{
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
    
},
    'article_two':{ title:'Article Two | Raheel Mukadam',
    heading:'Article Two',
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
    },
    'article_three':{ title:'Article Three | Raheel Mukadam',
    heading:'Article Three',
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
    }
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
            ${date.toDateString()}
        </div>
            
            <div>
                ${content}
            </div>
     </div>       
    </body>
</html>`;
return htmlTemplate;
}



var counter=0;
app.get('/counter',function(req,res){
   counter+=1;
   res.send(counter.toString());
});



var names=[];
app.get('/submit-name',function(req,res){//https://---------/?name=xxxxx
  
  var name=req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});



app.get('/articles/:articleName', function(req,res){
   var articleName=req.params.articleName;
   
   pool.query("select * from article where title="+req.params.articleName,function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else{
           if(result.rows.length===0){
               res.status(404).send('Article not found');
           }
           else{
               var articleData=result.rows[0];
               res.send(createTemplate(articleData));
           }
       }
   });
   
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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
