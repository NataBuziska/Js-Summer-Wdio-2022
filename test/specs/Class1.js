const sampleTest = require('./sampleTest');
const { expect , assert } = require ("chai");

describe ('practice', () => {
    it ('verify the page title', async () => {
        await browser.url ('https://www.facebook.com/');
        const pageTitle = await browser.getTitle ();
        console.log ('\nPage title');
        console.log (pageTitle);
        expectedPageTitle = 'Facebook - log in or sing up';
        expect(pageTitle, 'Facebook title is not as expected').to.equal(expectedPageTitle);
    });

    it('Verify the correct url launches when we open a webpage', async() => {
        const LaunchUrl = 'https://www.facebook.com/';
        await browser.url(LaunchUrl);
        const LauncedhUrl = await brouser.geturl;
        expect (launchedurl, 'Correct url is not launched when we open a webpage').to.equal (LauncedhUrl);
    });
    it.only ('Misc functions from browser', async () => { 
        const LaunchUrl = 'https://www.facebook.com/'
        await browser.url (LaunchUrl);
        const windowHandle = await browser.getWindowHandel();
        console.log ('\nwindowHandle');
        console.log (windowHandle)

        await browser.pause (7000);
        await browser.back ();
        await browser.pause (7000);
        await browser.forward ();
        await browser.pause (7000);
        await browser.refresh ();
    });
    
});