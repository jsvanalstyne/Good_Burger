var orm = require("../config/orm.js");

var burger = {
      // Allows us to pass a query to MySQL to display all the burgers
    selectAll: function (modalcb) {
        orm.selectAll("burgers", function (res) {
            modalcb(res);
        });
    },
      // Allows us to pass arguments to the orm for the MySQL query to create one burger
    insertOne: function (cols, vals, modalcb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            modalcb(res);
        });
    },
    // Allows us to pass arguments to the orm for the MySQL query to update a burger
    updateOne: function (objColVals, condition, modalcb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            modalcb(res);
        });
    }


}

module.exports = burger;