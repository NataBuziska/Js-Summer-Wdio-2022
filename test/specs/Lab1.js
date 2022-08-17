describe ('Practice', () => {

    it ('Verify Church chair heading is displayd', async () => {
        await browser.url('https://classroomessentialsoline.com/');
        await browser.pause(7000);

        const webElement = $('=CHURCH CHAIRS').clic();
        await browser.pause(7000);
        const pageHeading = $('<h>');
        const isHeadingDisplayd = iheading.isDisplayed();
        
        expect (constpageHeading, 'CHURCH CHAIRS heading is NOT displayed').to.be.true;
        await browser.pause(7000);
    })
    
})


it.only('verify link if use submits empty login form', ()=> {
    await browser.url('https://www.facebook.com/');
    await browser.pause(7000);
    const loginButton = await $('Log In').clic();
    const findAccLink =  await ('a*=Find your account').isDisplayed();
    expect(findAccLink, '')   

 



})