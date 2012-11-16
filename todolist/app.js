var viewModel = {};
viewModel.todos = ko.observableArray([
    {text: 'Todo 1', done: false},
    {text: 'Todo 2', done: false},
    {text: 'Todo 3', done: true}
]);

viewModel.addAction = function() {
    var todo = {
        text: document.getElementById("input").value,
        done: false
    };
    viewModel.todos.push(todo);
    document.getElementById("input").value = "";
};

viewModel.toggleAction = function(a) {
    console.log(a);
    a.done = a.done == false;
    console.log(a);
};

ko.applyBindings(viewModel);
