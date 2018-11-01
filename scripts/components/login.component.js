angular.module('Sidebar')
.component('loginComponent', {
    templateUrl: "templates/login.template.html",
    bindings: {
        // getRequest: '&',
        // logOut: '&'
    },
    controller: ['$http', LoginCtrl],
})

function LoginCtrl($http) {
    var self = this;
    // console.log(self)
        self.check = function(user, pass) {
            if(user && pass) {
                // console.log( ? 'gasit' : 'inexistent');
                for(key in self.response) {
                    if(self.response[key].first_name.toLowerCase() == user.toLowerCase()) {
                        // console.log("gasit");
                        if(self.response[key].last_name == pass) {
                            // console.log("Autentificat");      
                            self.user.loggedIn = true;
                            self.myErr = "";
                            return;
                        } else {
                            self.myErr = "Parola gresita";
                            // console.log("Parola gresita"); 
                            return;
                        }
                    }            
                }
                self.myErr = "Cont inexistent";
            } else {
                self.myErr = "Completati campurile";
            }
            
            // console.log("Cont gresit");
        };
        
        self.getRequest = function() {
            // console.log('da');
            $http({
                method: 'GET',
                url: 'assets/file.json',
            }).then(function successCallback(response) {
                //conturile sunt legate de variabila scope si pot fi accesate din browser
                self.response = response.data;
                // console.log(response);
            }, function errorCallback(response) {
                alert("The call responded with error:" + response.statusText);
                // console.log(response);
            });        
        }
    
        self.logOut = function() {
            self.user.loggedIn = false;
        }
    
}