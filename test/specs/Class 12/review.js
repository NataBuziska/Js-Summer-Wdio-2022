const { expect } = require ("chai");
    /**
     * 1. Launch https://www.kohls.com/
     * 2. Click on Shop by Category
     * 3. Move mouse on School, College & Beyond
     * 4. Click on Frames & Wall Decor
     * 5 Verify title -> "Dorm Essentials Picture Frames & Photo Albums" is displayed
     */
describe ('Review session', () =>{
    it('Dorm Essentials Picture Frames & Photo Albums is displayed', async () => {
        await browser.url('https://www.kohls.com/');
        await await browser.pause(2000);

        const shopByCategoryMenu = await $('//a[contains(@class, "menu-icons")]');
        await shopByCategoryMenu.click();
        const schoolBtn = await $('//a[contains(text(), "School")]')
        await schoolBtn.moveTo();
        await browser.pause(5000);
        const frameBtn = await $('//a[contains(text(), "Wall Decor")]')
        await frameBtn.click();
        expect(await browser.getTitle(), )
    })
})