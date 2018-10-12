//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
});

function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(e){
    if(e.which === 71) {
      alert("you pressed G!");
    }
  });
}

function submitIt() {
  $("form input:submit").on('keydown', function() {
    alert("Your form is going to be submitted now.");
  });
}
