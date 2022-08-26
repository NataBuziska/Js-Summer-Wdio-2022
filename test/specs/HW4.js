/**
 * Complete the automation using POM design
 * 
 * Due: Aug-24 (Wed)
 * 
 */
 const Homepage = require("../../POM/Hotels/Homepage"); 
 const Commands = require("../Commands");
 const moment = require("moment");

    describe('Search Feature', () => {
    it(' Verify past dates of the current month is not enabled', async () => {
        const homepage = new Homepage();
         /**
          * Tc-1:
          * 
          * hotels.com
          * Verify past dates of the current month is not enabled
          */
          // 1. Launch hotels.com
          await browser.url('https://www.hotels.com/');
          await browser.pause(2000);
          // 2.  Verify past dates of the current month is not enabled
          await homepage.clickOnCalendarButton();
          await homepage.clickOnPreviousMonthButton();

          const now = moment();
          const currentDate = now.format('D');
          now.add(-1, 'day');
          await homepage.findCurrentDateButton();
          const previousDate = await $ (findCurrentDateButton(now.add(-1, 'day')));
          expect (previousDate.isEnabled(),'This date is not enabled').to.be.true;

    })

    /**
     * 
     * Tc-2:
     * 
     * Verify destination and check-in and check-out dates are as user selected
     * 
     * 1. Launch hotels.com
     * 2. Type "man" in destination
     * 3. Select "Manila" from auto-suggestion
     * 4. Select tomorrow's date as check-in date (Aug-23)
     * 5. Select 5 days from check-in as check-out (Aug-28)
     * 5. Click Search button
     * 6. Verify destination has Manila
     * 7. Verify check-in date is tomorrow's date
     * 8. Verify check-out date in 5-days from check-in date
     * 
     */
     it('Verify search page shows correct user entry', async () => {
      const homepage = new Homepage();
      // 1. Launch hotels.com
       await browser.url('https://www.hotels.com/');

       // 2. Type "man" in destination
       await homepage.enterDestination('man');

       // 3. Select "Manila" from auto-suggestion
       await homepage.selectDestinationFromAutoSuggestion('Manila')

       // 4. Select tomorrow's date as check-in date 
        const now = moment();
        const currentDate = now.format('D');
        await homepage.clickOnCalendarButton();
        await homepage.clickOnPreviousMonthButton();
        now.add(1, 'day');
        await homepage.selectCheckInDate(now.add(1, 'day'));
        await homepage.selectCheckOutDate(now.add(6, 'day'));

     });
})  