'use strict';

describe('db should', function () {
    const { expect } = require('chai');
    let db;

    this.beforeEach(function () {
        db = require('../app/ignored/db')();
    });

    it('start with a record length of 0', function () {
        expect(db.records.length).to.equal(0);
    });

    it('add a record', function () {
        db.add({});
        expect(db.records.length).to.equal(1);
    });

    it('add an id to a record that is added', function () {
        let record = {};
        db.add(record);
        expect(record.id).to.equal(0);
    });

    it('add ids sequentially', function () {
        let record0 = {};
        let record1 = {};
        let record2 = {};
        db.add(record0);
        db.add(record1);
        db.add(record2);
        expect(record0.id).to.equal(0);
        expect(record1.id).to.equal(1);
        expect(record2.id).to.equal(2);
    });

    it('can retrieve by id', function() {
        let record1 = {};

        db.add({});
        db.add(record1);
        db.add({});

        let result = db.get(record1.id);

        expect(result).to.deep.equal(record1);
    });
});