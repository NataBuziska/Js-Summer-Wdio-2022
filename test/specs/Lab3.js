const { expect } = require('chai');
const moment = require("moment");
//const Homepage = require('../../POM/Facebook/Homepage')

/**
 * verify current Date is displayed on Sing up page
 * 
 * date = current date
 * year = current
 */

describe ('Practice moments', () => {
     it('verify current Date is selected by default on Sign Up', async () => {
        //const hPage = new Homepage();
        //const sPage = new SignUpPage();

        const now = moment();
        await browser.url ('/');
        await $ ('//a[contains(text), "Create new")]').click();
        await browser.pause(3000);
        const DateOnWeb = await $("select[@aria-label='Day']//option[@selected]").getText();
        const currentDate = moment().date();
        expect(Number(DateOnWeb), 'Current date is not selected').to.equal(currentDate); 

     });
     it.only('verify current is selected time Machine calendar', async () => {
        await browser.url('https://www.darksky.net/');
        await browser.pause(3000); 
        await $('=TIME MACHINE').click();
        await browser.pause(3000); 
        const DateIsSelected = await $('//td[@class="is-today"]//button').getText();
        const currentDate = moment().data();
        expect(Number(DateIsSelected), 'Current date is not selected').to.equal(currentDate.date());

     })
    })
