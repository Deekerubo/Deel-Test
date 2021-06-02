const Page = require('../pageObjects/page')

class HomePage extends Page {
    get CreateAContract () { return $('p=Create a Contract') }
    async clickCreateAContract () {
        await (await this.CreateAContract).click();
    }
}

module.exports = new HomePage();
