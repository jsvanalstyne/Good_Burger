$(".devburger").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("Burger has been devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $("#clickSubmit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("submitclicked");
    var newBurger = {
      burger_name: $("#add_burger").val().trim(),
      devoured: false
    }
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Burger Added!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });