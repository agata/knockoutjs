var viewModel = {};

viewModel.message = ko.observable("");

viewModel.clickAction = function() {
    var msg = "Hello " + document.getElementById("name").value;
    viewModel.message(msg);
};

ko.applyBindings(viewModel);