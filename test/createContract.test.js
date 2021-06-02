const HomePage = require('../pageObjects/home.page');
const FixedContractPage = require('../pageObjects/contract.page');
const data = require('../fixtures/data');
const dotenv = require('dotenv')
const LoginPage = require('../pageObjects/login.page');
const Logout = require('../pageObjects/logout.page')

dotenv.config()


describe('Application Login', () => {
    it('should login with valid credentials', () => {
        LoginPage.open()
        LoginPage.login(process.env.EMAIL, process.env.PASSWORD)
        const welcomeMessage = $('p[class="sidebar-option-p"]');
        expect(welcomeMessage).toHaveText('Home');
        
    });


});

describe('Create a new Fixed contract ', () => {
    it('should successfully create a contract', () => {
        HomePage.open();
        HomePage.clickCreateAContract();
        FixedContractPage.selectFixedRate();
        FixedContractPage.generalInfo();
        FixedContractPage.paymentDetails();
        FixedContractPage.defineDates();
        FixedContractPage.extras();
        FixedContractPage.compliance();
        
        const contractName = $('.editable-text > h1');
        expect(contractName).toHaveTextContaining(data.contractName);

        const scope = $('.scope-text');
        expect(scope).toHaveTextContaining(data.scope);
        
        const constractorsCountry = $('div[data-qa="contractors-country"] > h4');
        expect(constractorsCountry).toHaveTextContaining(data.State);
                
        const rate = $('div[data-qa="rate"] > h4');
        expect(rate).toHaveTextContaining(data.rate);
        
        const contractType = $('div[data-qa="contract-type"] > h4');
        expect(contractType).toHaveTextContaining(data.contractType);
        
    });

    
});

describe('Application Logout', () => {
    it('should logout ', () => {
    Logout.open()
    Logout.logout()
    expect(browser).toHaveUrl('https://dev.deel.wtf/login');
    });
});
