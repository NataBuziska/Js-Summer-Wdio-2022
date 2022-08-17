/**
 * Tc-1:
 * https://www.darsky.net
 * Verify feelsLikeTempValue is between lowTempValue and highTempValue
 */

describe('Homework', () =>{
    it ('Verify feelsLikeTempValue is between lowTempValue and highTempValue', async () => {
        await browser.url('https://www.darsky.net/')
        await browser.pause(3000);
        const feelIsLikeTemp = $('span[class=feels-like-text]').getText();
        const lowTemp = $('span[class=low-temp-text]').getText();
        const highTemp = $('span[class=high-temp-text]').getText();
        const numfeelIsLikeTemp = Number (feelIsLikeTemp.substring(0, feelIsLikeTemp.lenght - 1));
        const numlowTemp = Number (lowTemp.substring(0, lowTemp.lenght - 1));
        const numhighTemp = Number (highTemp.substring(0, highTemp.lenght-1));

        expect(numfeelIsLikeTemp >= numlowTemp && numfeelIsLikeTemp <= numhighTemp, 'numfeelIsLikeTemp is in between the low and high temp').to.be.true;
        await browser.pause(7000);
    })
        /**
        * Tc-2:
        * https://www.darsky.net
        * Verify user can get temperature based on zipcode
         * 1.Launch darsky.net
         * 2. Verify zipcode inputbox is enabled
         * 3. Enter zipcod in inputbox
         * 4. Verify searchbutton is enabled
         */
     it  ('Verify user can get temperature based on zipcode',async () =>{
        await browser.url('https://www.darsky.net/');
        await browser.pause(7000);
        const zipcodeInputBox = await $('//input[@type="text"]');
        await zipcodeInputBox.setValue(01001)
        await browser.pause(2000);
        const searchBtn = await $('.searchButton')
        await searchBtn.click();
        expect(searchBtn, '3 Kostyolna Street, Kyiv, Kyiv').to.be.true;
        await browser.pause(7000);
    })

    /**Tc-3:
   * https://www.facebook.com
   * 
   * Verify user gets error message when submit empty login form
   * expected error msg -> The email address or mobile number you entered isn't connected to an account.
   */
    it (' Verify user gets error message when submit empty login form', async () =>{
        await browser.url('https://www.facebook.com/'); 
        await browser.pause(7000);
        const loginBtn = await $ ('button[name=login]') 
        await loginBtn.click();
        expect(loginBtn, 'the message is appeared "The email or mobile number you entered is not connected to an account."').to.be.true
    })
  })
   /**
   * Tc-4:
   * https://www.facebook.com
   * 
   *Verify empty messenger login flow
   * 1. Click Messenger
   * 2. Verify 'Keep me signed in' is not selected
   * 3. Click 'Log In' button
   * 4. Verify link -> "Find your account and log in" is displayed
   * 5. Verify 'Continue' button is enabled
   * 6. Verify 'Keep me signed in' is not selected
   * 7. Click 'Keep me signed in'
   * 8. Verify 'Keep me signed in' is selected
   * 
   */

   it (' Verify user gets error message when submit empty login form', async () =>{
    await browser.url('https://www.facebook.com/'); 
    await browser.pause(7000);
    const messengerLink = await $('=Messenger');
    await messengerLink.click();
    await browser.pause(7000);
    const keepMeSignedIn = $('.uiInputLabelLabel');
    await keepMeSignedIn.click();
    expect (keepMeSignedIn, 'is selected').to.be.false;
    await browser.pause(7000);
    const loginBtn = await $('#loginbutton');
    await loginBtn.click();
    await $('*=ount and').isDisplayed();
    expect ($('*=ount and').isDisplayed(), 'is displayed').to.be.true;
    await browser.pause(7000);
    const continueBtn = $ ('button[type=submit');
    await continueBtn.iEnebled();
    await $('.uiInputLabelLabel');
    expect ($('.uiInputLabelLabel'), 'is not selected').to.be.true;
    await browser.pause(7000);
    await $('.uiInputLabelLabel').click();
    await $('.uiInputLabelLabel').click().isSelected();
    expect ($('.uiInputLabelLabel').click().isSelected(), 'is selected').to.be.true;
    })