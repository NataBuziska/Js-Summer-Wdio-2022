// Due - Aug 19 (Friday eod)
/**
 * 
 * Launch darksky.net
 * Get all the timeline data in an array
 * then print array in the console.
 */
describe ('HW2', () =>{
    it('print array in the console', async =>{
        
        await brawser.url('https://www.darsky.net/');
        await browser.pause(3000);
        const allTimeLineElements = await $$('//span[@class="hour first"]//span[contains(@class, "-text")]');
        for (const TimeLineElement of allTimeLineElements) {
            console.log(await TimeLineElement.getText());
        }
    })



/**
 * Verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Aug-20
 * 8. Verify check-out date in Sep-5
 */
 it('Verify destination and check-in/ and check-out dates are as user selected', async =>{

 await brawser.url ('https://www.hotels.com/');
 await browser.pause(3000);
 await $("//button[@data-stid='destination_form_field_dialog_trigger']").click();
 await browser.pause(3000);
 await $('#destination_form_field').setValue('Man');
 await browser.pause(3000);
 const suggestionElements = await $$("//div[@class='truncate']//strong");
 for (const suggestionElement of suggestionElements) {
    const suggestionText = await autoSuggestionElement.getText();
    if (suggestionText.toLowerCase().localeCompare('manila'.toLowerCase()) === 0) {
        await suggestionElement.click();
        break;
        }
     };
 await browser.pause(3000);
 await $('#date_form_field-btn').click();
 await browser.pause(3000);
     const allAugDateElements = await $$('//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]');
     for (const dateElement of allAugDateElements) {
        const date = await dateElement.getAttribute('data-day');
        if (date.localeCompare("20") === 0) {
        await dateElement.click();
        break;
        }
        };
     const allSepDateElements = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]');
     for (const dateElement of allSepDateElements) {
        const date = await dateElement.getAttribute('data-day');
        if (date.localeCompare("5") === 0) {
        await dateElement.click();
        break;
        }  
        };
     await browser.pause(3000);
     await $('//button[@data-stid="apply-date-picker"]').click();
     await browser.pause(20000);

 });

})