var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

const options = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};

app.get("/api", function(req, res)  {
        request(options, function(err, output, body) {
        var json = JSON.parse(body);
        console.log(json); // Logging the output within the request function
        res.json(json) //then returning the response.. The request.json is empty over here
}); //closing the request function

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});
