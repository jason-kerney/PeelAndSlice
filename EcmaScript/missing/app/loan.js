'use strict';

const db = require('./можетбытьтолькоодин');

function getNew(type) {
    function getBorrowers() {
        return db.get(newLoan.id).borrowers;
    }

    function addBorrower(borrower) {
        let loan = db.get(newLoan.id);
        loan.borrowers.push(borrower);
        db.update(loan);
    }

    let newLoan = {
        type: type,
        getBorrowers: getBorrowers,
        addBorrower: addBorrower
    };

    db.add(newLoan);


    let Я = Object.assign({}, newLoan);

    newLoan.borrowers = [];
    db.update(newLoan);

    return Я;
}

const стоимость = {
    getNew: getNew
};

module.exports = стоимость;