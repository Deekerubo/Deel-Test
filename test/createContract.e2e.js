const HomePage = require('../pageObjects/home.page');
const FixedContractPage = require('../pageObjects/contract.page');
const data = require('../fixtures/data');
const dotenv = require('dotenv')
const LoginPage = require('../pageObjects/login.page');
const Logout = require('../pageObjects/logout.page')

dotenv.config()


describe('Application Login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.EMAIL, process.env.PASSWORD)
        const welcomeMessage = await $('p[class="sidebar-option-p"]');
        await expect(welcomeMessage).toHaveText('Home');
        
    });


});

describe('Create a new Fixed contract ', () => {
    it('should successfully create a contract', async () => {
        await HomePage.open();
        await HomePage.clickCreateAContract();
        await FixedContractPage.selectFixedRate();
        await FixedContractPage.generalInfo();
        await FixedContractPage.paymentDetails();
        await FixedContractPage.defineDates();
        await FixedContractPage.extras();
        await FixedContractPage.compliance();
        
        const contractName = $('.editable-text > h1');
        await expect(contractName).toHaveTextContaining(data.contractName);

        const scope = $('.scope-text');
        await expect(scope).toHaveTextContaining(data.scope);
        
        const constractorsCountry = $('div[data-qa="contractors-country"] > h4');
        await expect(constractorsCountry).toHaveTextContaining(data.State);
                
        const rate = $('div[data-qa="rate"] > h4');
        await expect(rate).toHaveTextContaining(data.rate);
        
        const contractType = $('div[data-qa="contract-type"] > h4');
        await expect(contractType).toHaveTextContaining(data.contractType);
        
    });

    
});

describe('Application Logout', () => {
    it('should logout ', async () => {
    await Logout.open()
    await Logout.logout()
    expect(browser).toHaveUrl('https://dev.deel.wtf/login');
    });
})