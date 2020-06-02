const loginPage = require('../../pages/login.page')
const configdata = require('../../config')
const constants = require('../../constants')

describe('login page feature test', function(){

    this.retries(2)

    it('verify login page title', function(){

        browser.url('/')
        browser.maximizeWindow()
        const title = loginPage.getPageTitle()
        console.log('login page title is', title)
        assert.equal(constants.LOGIN_PAGE_TITLE, title , 'title is not found')
    })

    //it.only executes only this test

    it.only('verify signup Link', function(){
        browser.url('/')
        assert.equal(false,loginPage.isSignUpLinkExist(), 'sign up link is not present')
    })

    it('verify login', function(){
        loginPage.doLogin(configdata.username, configdata.password)
    })




})