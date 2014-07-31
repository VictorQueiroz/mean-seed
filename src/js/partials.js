angular.module('partials', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('about-us.tpl.html',
    "<div class=container><div class=row><div class=col-lg-12><h1>About us</h1><p>What don't you know about us? Feel free to e-mail me as a <b>friend</b>:</p><p>victorcqueirozg@gmail.com.</p></div></div></div>"
  );


  $templateCache.put('authentication.tpl.html',
    "<div class=container><div class=row><div class=col-lg-12><h1>Autenticação</h1><form name=form ng-submit=authenticate(credentials)><div class=form-group><label for=\"\">Nome de Usuário</label><input ng-model=credentials.username class=form-control></div><div class=form-group><label for=\"\">Senha</label><input ng-model=credentials.password type=password class=form-control></div><div class=form-group><button type=submit class=\"btn btn-default\">Conectar-se</button></div></form></div></div></div>"
  );


  $templateCache.put('index.tpl.html',
    "<div class=container><div class=row><div class=col-lg-12><h1>You have arrived!</h1><p>Still waiting, soon we will have a good gruntfile for your development.</p></div></div></div>"
  );


  $templateCache.put('users/list.tpl.html',
    "<div class=container><div class=row><div class=col-lg-12><table class=table><thead><th>Name</th><th>E-mail address</th><th>Username</th></thead><tbody ng-repeat=\"user in users\"><tr><td><a href=\"/users/{{ user._id }}\" ng-bind=\"(user.name || '?')\"></a></td><td ng-bind=user.email></td><td ng-bind=user.username></td></tr></tbody></table></div></div></div>"
  );


  $templateCache.put('users/show.tpl.html',
    "<div class=container><div class=row><div class=col-lg-12><img src=http://placehold.it/1600x500 width=100% alt=\"Profile photo\"><h2>{{ user.name }} <small ng-bind=user.email></small></h2><p><b>Username:</b> {{ user.username }}</p></div></div></div>"
  );

}]);
