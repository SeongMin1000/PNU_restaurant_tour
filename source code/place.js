const express = require('express')
const app = express()
const port = 5500

app.use(express.static('public'))

// API 정보(부산광역시_부산 맛집 정보 서비스): https://www.data.go.kr/data/15063472/openapi.do
app.get('/food', function(req,res){
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'http://apis.data.go.kr/6260000/FoodService/getFoodKr?ServiceKey=V0c5yW3DGjITUu2wSxWIIhSzPoUL4nWHTiXR6cvKrfUV9ASwcVObCborKeY67cOYcwJB4t1wieSR3H6uKL9JgA==&resultType=json',
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error); 
    res.send(response.body);
  });
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))