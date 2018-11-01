angular.module('Sidebar')
.component('todoComponent', {
    templateUrl: 'templates/todo.template.html',
    controller: todoCtrl,
})

function todoCtrl() {
    var self = this;
    self.taskList = [];
    self.editMode = false;
    self.pushTask = function(task) {
        if(task && !self.taskList.includes(task)) {
            self.taskList.unshift(task);
            self.myTask = "";
        } else {
            self.myTask = "";
            
        }
        // console.log(self.taskList);    
    };
    
    self.removeMe = function($index) {
        self.taskList.splice($index, 1);
       
    };

    self.editMe = function($index, value) {        
        self.taskList[$index] = value;       
    };
}