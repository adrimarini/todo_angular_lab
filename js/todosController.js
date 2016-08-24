angular.module('todosApp')
  .controller('TodosController', TodosController);

function TodosController () {
  var self = this;
  self.addTodo = addTodo;

  self.newTodo = {
    text: '',
    done: false
  }

  function addTodo() {
    self.todos.push({text: self.newTodo.text, done: false});
    self.newTodo = {text: '', done: false};
  }

  self.todos = [
    {text: 'Get some Broccoli', done: false},
    {text: 'Feed Fluffy', done: false}
  ];

}
