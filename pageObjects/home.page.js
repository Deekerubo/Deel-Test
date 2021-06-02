const Page = require('../pageObjects/page')

class HomePage extends Page {
    get CreateAContract () { return $('p=Create a Contract') }
    get logoutButton () { return $('[data-original-title="Logout"]')}
    async clickCreateAContract () {
        await (await this.CreateAContract).click();
    }

    async logout () {
        await (await this.logoutButton).click();
    }

}

module.exports = new HomePage();