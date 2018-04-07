var connection = require("./config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)){

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }

            cb(result);
        })
    },

    insertOne: function(table, columnName, values, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += columnName.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, values, function(err, result){
            if (err) {
                throw err;
            }
            console.log(values);
            cb(result);
        });
    },

    updateOne: function(table, condition, cb) {
        var queryString = "UPDATE" + table;

        queryString += " SET devoured = true";
        queryString += " WHERE " + condition + ";"; 

        connection.query(queryString, function(err, results) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;