module.exports = function(app, fs)
{
     app.get('/', function(req, res){
        res.render('index', {
           title: "MY HOMEPAGE",
           length: 5
        })
     });
}
// JSON 데이터를 render 메소드의 두번째 인자로 전달함으로서 페이지에서 데이터를 사용하게 된다.