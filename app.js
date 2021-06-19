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
    	client.on('player1_update', function(char,alt)
		{
			if(char=="miifighter" || char=="miiswordsman" || char=="miigunner")
			{
				alt=0;
			}

			fs.copyFile("./node_modules/Stocks/chara_2_"+char+"_0"+alt+".png", "./updateables/stock1.png", (err) => {
			  if (err)
			  {
				console.log("Error Found:", err);
			  }
			});
    	});

    	client.on('player2_update', function(char,alt)
		{
			if(char=="miifighter" || char=="miiswordsman" || char=="miigunner")
			{
				alt=0;
			}

			fs.copyFile("./node_modules/Stocks/chara_2_"+char+"_0"+alt+".png", "./updateables/stock2.png", (err) => {
			  if (err)
			  {
				if(err.errno==-4058)
				{
					fs.appendFile('./updateables/stock2.png', "./node_modules/Stocks/chara_2_"+char+"_0"+alt+".png", function (err) {
					  if (err) throw err;
					  console.log('File created');
					});
				}
				else
				{
					console.log("Error Found:", err);
				}
			  }
			});
    	});

    	client.on('title_update', function(title)
		{
			fs.readFile("./updateables/title.txt", 'utf8', (err,data) =>
			{
			  if (err)
			  {
				if(err.errno==-4058)
				{
					fs.appendFile('./updateables/title.txt', title, function (err) {
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
					fs.writeFile("./updateables/title.txt", newString, 'utf8', function (err)
					{
						if (err) return console.log(err);
					});
			  }
			});
    	});

    	client.on('player1score_update', function(score)
		{
			fs.readFile("./updateables/score1.txt", 'utf8', (err,data) =>
			{
			  if (err)
			  {
				if(err.errno==-4058)
				{
					fs.appendFile('./updateables/score1.txt', score, function (err) {
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
					var newString = data.replace(data, score);
					fs.writeFile("./updateables/score1.txt", newString, 'utf8', function (err)
					{
						if (err) return console.log(err);
					});
			  }
			});
    	});

    	client.on('player2score_update', function(score)
		{
			fs.readFile("./updateables/score2.txt", 'utf8', (err,data) =>
			{
			  if (err)
			  {
				if(err.errno==-4058)
				{
					fs.appendFile('./updateables/score2.txt', score, function (err) {
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
					var newString = data.replace(data, score);
					fs.writeFile("./updateables/score2.txt", newString, 'utf8', function (err)
					{
						if (err) return console.log(err);
					});
			  }
			});
    	});

    	client.on('player1name_update', function(name)
		{
			fs.readFile("./updateables/name1.txt", 'utf8', (err,data) =>
			{
			  if (err)
			  {
				if(err.errno==-4058)
				{
					fs.appendFile('./updateables/name1.txt', name, function (err) {
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
					var newString = data.replace(data, name);
					fs.writeFile("./updateables/name1.txt", newString, 'utf8', function (err)
					{
						if (err) return console.log(err);
					});
			  }
			});
    	});

    	client.on('player2name_update', function(name)
		{
			fs.readFile("./updateables/name2.txt", 'utf8', (err,data) =>
			{
			  if (err)
			  {
				if(err.errno==-4058)
				{
					fs.appendFile('./updateables/name2.txt', name, function (err) {
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
					var newString = data.replace(data, name);
					fs.writeFile("./updateables/name2.txt", newString, 'utf8', function (err)
					{
						if (err) return console.log(err);
					});
			  }
			});
    	});

    	client.on('info1_update', function(title)
		{
			fs.readFile("./updateables/info1.txt", 'utf8', (err,data) =>
			{
			  if (err)
			  {
				if(err.errno==-4058)
				{
					fs.appendFile('./updateables/info1.txt', title, function (err) {
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
					fs.writeFile("./updateables/info1.txt", newString, 'utf8', function (err)
					{
						if (err) return console.log(err);
					});
			  }
			});
    	});

    	client.on('info2_update', function(title)
		{
			fs.readFile("./updateables/info2.txt", 'utf8', (err,data) =>
			{
			  if (err)
			  {
				if(err.errno==-4058)
				{
					fs.appendFile('./updateables/info2.txt', title, function (err) {
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
					fs.writeFile("./updateables/info2.txt", newString, 'utf8', function (err)
					{
						if (err) return console.log(err);
					});
			  }
			});
    	});
	});
});

server.listen(8080);
