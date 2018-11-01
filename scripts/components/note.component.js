angular.module('Sidebar')
.component('noteComponent', {
    templateUrl: 'templates/note.template.html',
    controller: noteCtrl,
})

function noteCtrl() {
    self = this;
    
    self.save = function(message) {
        if(message) {
            alert("The message \"" + message + "\" was saved");
        }else {
            alert("Error occured");
        }
    };

    self.clear = function(message) {
        console.log(message);
        message = "";
        console.log(message);
    }
}