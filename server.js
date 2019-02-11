var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // POST 데이터 처리
var session = require('express-session'); // 세션 관리
var fs = require("fs"); // Node.js에 내장되어 있는 모듈 - 파일을 열기 위함

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // ejs 템플릿 엔진. -> 템플릿을 읽어 엔진의 문법과 설정에 따라서 파일을 HTML형식으로 변환시키는 모듈. (Express에서는 Jade 템플릿 엔진이 유명)
app.engine('html', require('ejs').renderFile);

// ejs에서는 두가지만 알면 된다. 1. <% 자바스크립트 코드 %> 2. <% 출력 할 자바스크립트 객체 %>(2번은 자바스크립트 객체를 router에서 받아 올 수도 있습니다.)

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret: '@#@$MYSIGN#@$#$', // 쿠키를 임의로 변조하는것을 방지하기 위한 SIGN값(원하는값 아무거나 넣으면 된다)
    resave: false,  // 세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값.(문서에서는 false를 권장)
    saveUninitialized: true // uninitialized 세션이란 새로 생겼지만 변경되지 않은 세션. (문서에서는 true 권장)
}));

var router = require('./router/main')(app, fs);