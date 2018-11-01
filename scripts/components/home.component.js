angular.module('Sidebar')
.component('homeComponent', {
    templateUrl: 'templates/home.template.html',
    controller: locationCtrl
})

function locationCtrl() {
    var self = this;
    self.geolocation = true;
    self.longitude = null;
    self.latitude = null;
    
    self.getMyLocation = function() {
        console.log("Yep yep");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            self.geolocation = false;
        }
    }

    function showPosition(position) {
        self.geolocation = true;
        console.log(position.coords);
        self.latitude = position.coords.latitude;
        self.longitude = position.coords.longitude;
    }

}