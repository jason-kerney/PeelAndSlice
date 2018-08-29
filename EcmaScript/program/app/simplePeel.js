// The Worst of Legacy Code: Forensic Development

function calulateTotalMortage(name, db) {
    const personLoader = require('./ignored/person');
    const person = personLoader.LoadPersonByName(name, db);

    if(Boolean(person.getFinancalInformation().getHomeEquityLoan()) || person.getFinancalInformation().getHomeEquityLoan() === 0) {
        return (
            person.getFinancalInformation().getHomeEquityLoan() + 
            (Boolean(person.getFinancalInformation().getFirstMortagePayment()) 
                ? person.getFinancalInformation().getFirstMortagePayment() 
                : 0)
        );
    }
    if(Boolean(person.getFinancalInformation().getFirstMortagePayment()) || person.getFinancalInformation().getFirstMortagePayment() === 0) {
        return person.getFinancalInformation().getFirstMortagePayment();
    }
    return 0;
}

module.exports = {
    calulateTotalMortage
}