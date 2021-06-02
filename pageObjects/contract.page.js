const Page = require('./page');
const data = require('../fixtures/data')


class FixedContractPage extends Page {
    // Click on the fixed contract page button
    get fixedRate () { return $('a[href="/create/fixed"] > div> h4') }

    // General Info
    get contactNameInput () { return $('input[name="name"]') }
    get scopeOfWork () { return $('textarea[name="scope"]') }
    get clickStartDate () { return $('div[name="effectiveDate"]')}
    get selectStartDate () { 
        const date = new Date();
        const today = date.getDate();
        let yesterday =  today - 1 
        return $(`abbr=${yesterday}`)
    }
    get nextPage () { return $('button[type="submit"]')}
    // Payment Details
    get rate () { return $('input[name="rate"]') }
    get selectCurrency () { return $('div:nth-child(2) > div > div:nth-child(2) > div > div') }
    get selectCurrencyInput () { return $('div=GBP - British Pound') }
    get paymentCycle () { return $('div:nth-child(3) > div > div > div:nth-child(2) > div > div') }
    get selectPaymentCycle () { return $('div=Week') }
    get specialClause () { return $('div=add a special clause') }
    get specialClauseInput () { return $('.textarea') }
    get nextPageButton () { return $('div.extra-form > div> button') }
    // Define Dates
    get clickSelectTaxResidenceCountry () { return $('.select__value-container')}
    get SelectTaxResidenceCountry () { return $('div=United States') }
    get clickSelectTaxResidenceState () { return $('div=Choose a state')}

    //Compliance
    get SelectTaxResidenceState () { return $('div=Colorado') }
    get createContractButton () { return $('div.compliance-form > div > button')}
    
    async selectFixedRate () {
        await (await this.fixedRate).click();
    }
    
    async generalInfo () {
        await (await this.contactNameInput).setValue(data.contractName);
        await (await this.scopeOfWork).setValue(data.scope);
        await (await this.clickStartDate).click();
        await (await this.selectStartDate).click();
        await (await this.nextPage).click();
    }

    async paymentDetails () {
        await (await this.rate).setValue(data.rate);
        await (await this.selectCurrency).click();
        await (await this.selectCurrencyInput).click();
        await (await this.paymentCycle).click();
        await (await this.selectPaymentCycle).click();
        await (await this.nextPage).click();
    }
    async defineDates () {
        await (await this.nextPage).click();
    }

    async extras () {
        await (await this.specialClause).click();
        await (await this.specialClauseInput).setValue(data.specialClause);
        await (await this.nextPageButton).click();
    }
    
    async compliance () {
        await (await this.clickSelectTaxResidenceCountry).click();
        await (await this.SelectTaxResidenceCountry).click();
        await (await this.clickSelectTaxResidenceState).click();
        await (await this.SelectTaxResidenceState).click();
        await (await this.createContractButton).click();
    }

}

module.exports = new FixedContractPage();
