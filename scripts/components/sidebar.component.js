angular.module('Sidebar')
.component("sidebarComponent", {
    templateUrl: "templates/sidebar.template.html",
    controller: function() {
        this.menu = {
            home: {
                name: "Home",
                url: "/",
            },
            contact: {
                name: "Contact",
                url: "#!contact"
            },
            about: {
                name: "About",
                url: "#!about"
            },
            login: {
                name: "Angular Login Page",
                url: "#!login"
            },
            stopwatch: {
                name: "Angular Stopwatch",
                url: "#!stopwatch"
            },
            todo: {
                name: "Angular Todo",
                url: "#!todo"
            },
            notes: {
                name: "Angular Notepad",
                url: "#!note"
            }
        }
        this.show = function() {
            console.log("I work");
        }
    }
    
})