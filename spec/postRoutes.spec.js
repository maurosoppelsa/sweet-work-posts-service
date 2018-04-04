var request = require('supertest')
  , express = require('express');

var app = express();

describe('postRoute: Post API Rest Service',function(){

app.get('/post', function(req, res){
  res.sendStatus(200)
});

describe('GET /post', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .get('/post')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});

app.get('/post/:id', function(req, res){
  res.sendStatus(200)
});

describe('GET /post/count', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .get('/post/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});

app.get('/post/author/:id', function(req, res){
  res.sendStatus(200)
});

describe('GET /post/author/:id', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .get('/post/author/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});

app.get('/post/title/:title', function(req, res){
  res.sendStatus(200)
});

describe('GET /post/title/:title', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .get('/post/title/theTitle')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});

app.post('/post/create', function(req, res){
  res.sendStatus(200)
});

describe('POST /post/create', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .post('/post/create',{json: true, body: {}})
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});

app.put('/post/:id', function(req, res){
  res.sendStatus(200)
});

describe('PUT /post/:id', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .put('/post/:id',{json: true, body: {}})
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});

app.delete('/post/:id', function(req, res){
  res.sendStatus(200)
});

describe('DELETE /post/:id', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .delete('/post/:id',{json: true, body: {}})
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});
});