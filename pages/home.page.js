const elementUtil = require('../util/elementUtil');
const constants = require('../constants')

class HomePage{

    get header(){ return $('h1.dashboard-selector__title') }

    get accountName(){ return $('span.account-name ') }

    getPageTitle(){
       return  elementUtil.doGetPageTitle(constants.HOME_PAGE_TITLE)
    }

    getHeaderText(){
        return elementUtil.doGetText(this.header)
    }

    getLoggedinUsernInAccountName(){
        return elementUtil.doGetText(this.accountName)
    }

}

module.exports = new HomePage()