// Front end JS to all ajax calls with informtion from the front-end

$(document).ready(function () {
  console.log("document loaded")
  // When the devour button is clicked, change the state of the data-devState to 1 or true, and then pass it the put request. 
  $(document).on("click", ".devburger", function (event) {
    event.preventDefault();
    // Get the id from the selected burger for the PUT request. 
    var id = $(this).data("burgerid");
    $(this).attr("data-devState", 1)
    var devourBurger = {
      devoured: $(this).attr("data-devState")
    }
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devourBurger
    }).then(
      function () {
        console.log("Burger has been devoured");
        // Reload the page to load previous informationa nd the new information. 
        location.reload();
      }
    );
  });
  // When the Submit button is clicked, take the name of the burger from the form field, set devoured to 0 or false and then create a post request with that information. 
  $(document).on("click", "#clickSumbit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#add_burger").val().trim(),
      devoured: 0
    }
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(
      function () {
        console.log("Burger Added!");
        // Reload the page to load previous informationa nd the new information. 
        location.reload();
      }
    );
  });
});