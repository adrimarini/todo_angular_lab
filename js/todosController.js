angular.module('todosApp')
  .controller('TodosController', TodosController);

function TodosController ($scope, $log) {
  $scope.addTodo = addTodo;

  $scope.newTodo = {
    text: '',
    done: false
  }

  function addTodo() {
    $scope.todos.push({text: $scope.newTodo.text, done: false});
    $scope.newTodo = {text: '', done: false};
    $log.log($scope.todos);
  }

  $scope.todos = [
    {text: 'Get some Broccoli', done: false},
    {text: 'Feed Fluffy', done: false}
  ];

}
