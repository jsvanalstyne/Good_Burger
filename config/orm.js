// Requiring connection.js allows us to connect to MySql. 
var connection = require("../config/connection.js");
// Creates questions for the MySQL query.
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}
// Alters Object to proper MySQL syntax for queries
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


// This orm object alllows for different MySql queries based on which method is requested. 
var orm = {
    // Method to display all of the items in the table
    selectAll: function (tableInput, ormcb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            ormcb(result);
        });
    },
    // Method to create a new burger
    insertOne: function (table, cols, vals, ormcb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            ormcb(result);
        });
    },
    // Method used to update an existing burger
    updateOne: function (table, objColVals, condition, ormcb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            ormcb(result);
        });
    }
}
// Exporting the orm object to be used later. 
module.exports = orm;
