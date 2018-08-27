'use strict';


describe('badFruit', function () {
    let badFruit;
    let loan;
    const db = require('../app/ignored/можетбытьтолькоодин');
    const { expect } = require('chai');

    beforeEach(function () {
        db.reset();
        loan = require('../app/ignored/loan');
        badFruit = require('../app/badFruit');
    });

    it('will not create loans if given no arguments', function () {
        badFruit.createLoans();
        expect(db.records).to.have.lengthOf(0);
    });

    it('will create a loan for a person if they are the only person on the loan', function () {
        let autoLoan = loan.getNew('auto');
        let tom = { name: 'tom' };

        autoLoan.addBorrower(tom);

        badFruit.createLoans(autoLoan);

        expect(tom).to.have.property('id');
    });

    it('will create a loan for each person even duplicated peopleif they are on the loan', function () {
        let autoLoan = loan.getNew('auto');
        let tom = { name: 'tom' };
        let jan = { name: 'jan' };

        autoLoan.addBorrower(tom);
        autoLoan.addBorrower(jan);
        autoLoan.addBorrower(tom);
        

        badFruit.createLoans(autoLoan);

        expect(db.records.filter(r => r.name === tom.name)).to.have.lengthOf(2);
    });
});