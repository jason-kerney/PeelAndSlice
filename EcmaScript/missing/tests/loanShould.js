'use strict';

describe('a loan should', function () {
    const { expect } = require('chai');
    const db = require('../app/ignored/можетбытьтолькоодин');
    let loan;

    beforeEach(function () {
        loan = require('../app/ignored/loan');
    });

    it('create a new loan in the database and return it', function () {
        let autoLoan = loan.getNew('auto');
        expect(autoLoan).to.have.property('id');
    });

    it('starts with no one recieving the loan', function () {
        let houseLoan = loan.getNew('house');

        let people = houseLoan.getBorrowers();

        expect(people).to.have.lengthOf(0);
    });

    it('add a borrower tom to a loan without adding tom to the db', function() {
        let studentLoan = loan.getNew('student');
        let tom = { name: 'tom' };

        studentLoan.addBorrower(tom);

        expect(tom).to.not.have.property('id');
        expect(studentLoan).to.not.have.property('мойбумажник');
        
        let result = studentLoan.getBorrowers();
        expect(result).to.contain(tom);
        expect(result).to.have.lengthOf(1);
    });
});