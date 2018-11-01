angular.module('Sidebar')
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template: '<home-component></home-component>'
    })
    .when("/contact", {
        templateUrl: "templates/contact.template.html"
    })
    .when("/about", {
        templateUrl: "templates/about.template.html"
    })
    .when("/login", {
        template: '<login-component></login-component>'       
    })
    .when("/stopwatch", {
        template: '<stopwatch-component></stopwatch-component>'
    })
    .when("/todo", {
        template: '<todo-component></todo-component'
    })
    .when("/note", {
        template: '<note-component></note-component'
    })
    .otherwise({
        templateUrl: "templates/404.template.html"
    })
})