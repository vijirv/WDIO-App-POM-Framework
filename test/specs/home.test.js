const loginPage = require('../../pages/login.page')
const homePage = require('../../pages/home.page')
const configdata = require('../../config')
const constants = require('../../constants')


describe('home page feature test',function(){

    this.retries(2) // this retry logic applies to all it block, need to use function(){} not fat arrow () =>

    it('verify home page title',function(){
            browser.url('/')
            browser.maximizeWindow()
            loginPage.doLogin(configdata.username, configdata.password)
            const title = homePage.getPageTitle()
            console.log('home page title is',title)
            assert.equal(title,constants.HOME_PAGE_TITLE,'The title is not correct')

    })

    it('verify home page header', function(){   //callback function
       this.retries(2) //applies to only this it block
        assert.equal(constants.HOME_HEADER_TITLE,homePage.getHeaderText());

    })

    it('verify loggedin account name', function(){   //callback function
        assert.equal(configdata.accountname,homePage.getLoggedinUsernInAccountName());

    })

})