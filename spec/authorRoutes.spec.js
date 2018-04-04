var request = require('supertest')
  , express = require('express');

var app = express();

describe('authorRoute: Author API Rest Service',function(){

app.get('/author', function(req, res){
  res.sendStatus(200)
});

describe('GET /author', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .get('/author')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});

app.get('/author/:id', function(req, res){
  res.sendStatus(200)
});

describe('GET /author/count', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .get('/author/count')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});


app.post('/author/create', function(req, res){
  res.sendStatus(200)
});

describe('POST /author/create', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .post('/author/create',{json: true, body: {}})
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});

app.put('/author/:id', function(req, res){
  res.sendStatus(200)
});

describe('PUT /author/:id', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .put('/author/:id',{json: true, body: {}})
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});

app.delete('/author/:id', function(req, res){
  res.sendStatus(200)
});

describe('DELETE /author/:id', function(){
  it('should respond with status 200 and the correct data format', function(done){
    request(app)
      .delete('/author/:id',{json: true, body: {}})
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200, done);
  })
});
});