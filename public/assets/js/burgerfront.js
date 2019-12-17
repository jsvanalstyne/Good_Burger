$(document).ready(function() {
  console.log("document loaded")

  $(document).on("click", ".devburger", function(event) {

    var id = $(this).data("burgerid");
    console.log(id);
    
    $(this).attr("data-devState", 1)
    console.log(this);
    // console.log(data-devState);
     var devourBurger ={
      devoured: $(this).attr("data-devState")
     }
    console.log(devourBurger);
   
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devourBurger
    }).then(
      function() {
        console.log("Burger has been devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $(document).on("click", "#clickSumbit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("submitclicked");
    var newBurger = {
      burger_name: $("#add_burger").val().trim(),
      devoured: 0
    }
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(
      function() {
        console.log("Burger Added!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});