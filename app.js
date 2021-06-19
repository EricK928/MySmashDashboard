// app.js
var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/'));//app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next)
{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(client)
{
    console.log('Client connected...');//This is shown in terminal first

    client.on('join', function(data)
    {
    	client.on('stock_update', function(char,alt,port)
		{
			if(char=="miifighter" || char=="miiswordsman" || char=="miigunner")
			{
				alt=0;
			}

			fs.copyFile("./node_modules/Stocks/chara_2_"+char+"_0"+alt+".png", "./updateables/stock"+port+".png", (err) => {
			  if (err)
			  {
				console.log("Error Found:", err);
			  }
			});
    	});

    	client.on('text_update', function(title,file)
		{
			fs.readFile("./updateables/"+file+".txt", 'utf8', (err,data) =>
			{
			  if (err)
			  {
				if(err.errno==-4058)
				{
					fs.appendFile('./updateables/'+file+'.txt', title, function (err) {
					  if (err) throw err;
					  console.log('File created');
					});
				}
				else
				{
					console.log("Error Found:", err);
				}
			  }
			  else
			  {
					var oldString=data;
					var newString = data.replace(data, title);
					fs.writeFile("./updateables/"+file+".txt", newString, 'utf8', function (err)
					{
						if (err) return console.log(err);
					});
			  }
			});
    	});



	});
});

server.listen(8080);
