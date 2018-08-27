'use strict';

module.exports = function () {
    let records = [];
    return  {
        records: records,
        add: function (item) {
            item.id = records.length;
            records.push(Object.assign({}, item));
        },
        get: function (index) {
            return records[index];
        },
        update: function (record) {
            records[record.id] = record;
        },
        reset: function() {
            while(records.length > 0) {
                records.pop();
            }
        }
    };
};