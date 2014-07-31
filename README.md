mean-seed
=========

Mean project seed based on https://github.com/btford/angular-express-seed.

The aim of this project is to facilitate and establish a pattern in the development of applications that follow the standard MEAN (MongoDB, Express, NodeJS and AngularJS). 

### Folder structure

```
app/
  config/
    express.js
    passport.js
  controllers/
    users.js
  models/
    user.js
  views/
    layout.jade
    index.jade
public/
src/
  js/
    app.js
    controllers.js
    services.js
    directives.js
    components/
      user/
        RegisterForm-Directive.js
        UserList-Directive.js      
        User-Service.js
        Auth-Ctrl.js
        Register-Ctrl.js
  partials/
    template.tpl.html
  scss/
    master.scss
server.js
```

#### How should I use my modules?

##### js/controllers.js
Contains user/*-Ctrl.js etc.

```
angular.module('user.ctrl.auth', ['user.ctrl.register']);
```

##### js/directives.js
Contains user/*-Directive.js.

```
angular.module('user.directive.user-list', []);
```

##### js/filters.js
Contains user/*-Filter.js

##### js/services.js
Contains user/*-Service.js.

Examples:
Register-Ctrl.js should be called as a module through user.ctrl.register.

```
angular.module('user.ctrl.newController', ['user.ctrl.anotherCtrl']);
```

User-Service.js should be called through user.service.

If you need another services which will be related with User-Service.js, it should be called/defined like this:

Filename: Foo-Service.js (e.g. ServiceName-Service.js)
```
angular.module('user.service.foo', ['user.service.bar']);
```

### Usage

```
npm install
bower install
grunt
npm start
```

Live reload it's not working yet, but it will.

Under development.
