angular.module('todosApp')
  .controller('TodosController', TodosController);

function TodosController () {
  var self = this;



  self.todos = [
    {text: 'Get some Broccoli', done: false},
    {text: 'Feed Fluffy', done: false}
  ];

}
