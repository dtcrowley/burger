var orm = ("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function (req, res){
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (req, res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (req, res){
            cb(res);
        });
    }
};

module.exports = burger;