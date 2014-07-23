angular.module('partials', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('about-us.tpl.html',
    "<div class=container><div class=row><div class=col-lg-12><h1>About us</h1><p>What don't you know about us? Feel free to e-mail me as a <b>friend</b>:</p><p>victorcqueirozg@gmail.com.</p></div></div></div>"
  );


  $templateCache.put('authentication.tpl.html',
    "<div class=container><div class=row><div class=col-lg-12><h1>Autenticação</h1><form name=form><div class=form-group><label for=\"\">Nome de Usuário</label><input class=form-control></div><div class=form-group><label for=\"\">Senha</label><input class=form-control></div><div class=form-group><button type=submit class=\"btn btn-default\">Conectar-se</button></div></form></div></div></div>"
  );


  $templateCache.put('index.tpl.html',
    "<div class=container><div class=row><div class=col-lg-12><h1>You have arrived!</h1><p>Still waiting, soon we will have a good gruntfile for your development.</p></div></div></div>"
  );

}]);
