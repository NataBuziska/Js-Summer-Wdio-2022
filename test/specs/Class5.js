describe('', () =>{
   it('Change the temp unit in darksky.net', async () => {
    /**
     * Change the temp-unit in darksky.net
     * 
     * 1. Launch darksky.net
     * 2. Store the current - temp in a variable
     * 3. using tempConversion formula to convert fT into celsius (cT)
     * 4. Change temp unit to "˚C, mph"
     * 5. Verify the current-temp on web is equals to cT.
     * 
     * cT = (fT - 32) * (5/9)
     */
    // 1. Launch darksky.net
    await browser.url('https://www.darksky.net/');

    await browser.pause(3000);

    const fTF = await $('//span[class="summary swap"]').getText();
    const fT = Number (fTF.substring(0, fTF.indexOf('˚')));
    const fTFInCelcium = (fT-32) * (5/9)


    await $('//div[@id="header"]//div[contains(@class,"selectric-units")]//div[@class="selectric"]//b').click();

    await browser.pause(1000);

    await $('//div[contains(@class, "selectric-open")]//li[contains(text(), "˚C") and contains(text(), "mph")]').click();

    await browser.pause(2000);

    const tempUnit = await $('//div[@id="header"]//div[contains(@class,"selectric-units")]//div[@class="selectric"]//span').getText();

    console.log(`\n\ntempUnit -> ${tempUnit}\n\n`);

    await browser.pause(5000);
    const cText = await $('//spain[@class="summery swap]"').getText();
    const cT = Number (cText.substring(0, cText.indexOf('˚')));

    console.log (`fT ->  ${fT}`);
    console.log (`cT ->  ${cT}`);
    console.log (`fTInCelcius -> `)
 expect(cT, 'Current Temp dos not convert correctly')

 });
     it('Verify the number of links of facebook-homepage is 46', async () => {
        /**
         * Launch facebook.com
         * Find all link-elements using a-tag
         * verify array-length should 46
         */
         await browser.url('https://www.facebook.com/');
         await browser.pause(3000);

         const linkElements = await $$ ('<a>');
         expect(linkElements.length, 'Number of links is not equel 46')
    })
})  

