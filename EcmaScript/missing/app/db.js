'use strict';

module.exports = function () {
    let records = [];
    return  {
        records: records,
        add: function (item) {
            item.id = records.length;
            records.push(item)
        },
        get: function (index) {
            return records[index];
        },
        update: function () {}
    };
};