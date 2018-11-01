angular.module('Sidebar')
.component('stopwatchComponent', {
    templateUrl: 'templates/stopwatch.template.html',
    controller: ['$interval', '$timeout', stopwatchCtrl],
})

function stopwatchCtrl($interval, $timeout) {
    var self = this;
    self.time = {
        s: 0,
        ms: 0,
    }
    self.myInterval = null;
    self.upp = function(name) {
        if(name) {
            return name.toUpperCase();
        }        
    }

    self.startCount = function() {
        self.stopCount();
        $timeout(timeWellSpent, 5000);      
        self.myInterval = $interval(function() {
            self.time.ms += 1;
            if(self.time.ms == 240) {
               self.time.s++;
               self.time.ms = 0;
            }
        })
    }   

    function timeWellSpent() {
        alert("You won't get back those 5 seconds.");
        $timeout.cancel(self.timeWellSpent);
    }

    self.stopCount = function() {
        $interval.cancel(self.myInterval);
        $timeout.cancel(self.timeWellSpent);
    }

    self.resetCount = function() {
        self.time = {
            s:0,
            ms:0
        };
    }
}