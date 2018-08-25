module.exports = {
    escalateProblems: function(loans) {
        loans.forEach(loan => {
            if(loan.isOverDue() && (loan.getAmount() > 5000)) {
                loan.saveStatus('Critical');
            }
            else if (loan.isOverDue() && (loan.getAmount() > 50)) {
                loan.saveStatus('Escalated');
            }
        });
    }
};