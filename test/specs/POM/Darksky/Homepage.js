const Commands = require("../Commands");

class Homepage {

    commands = new Commands();
    // Locators for web-elements on the Homepage (variables)
    feelsLikeTempValue = '.feels-like-text';
    lowTempValue = '.low-temp-text';
    highTempValue = '.high-temp-text';
    typeZippcode = '' 

// Functions in order to interact with the web-elements on the Homepage
    /**
     * function to find temp FeelsLike, LowTemp, HigtTemp
     * Input: locator,
     *  
     */
     async feelsLike(feelsLikeTempValue) {
        return await $(feelsLikeTempValue).getText();
     }
     async lowTemp(lowTempValue) {
        return await $(lowTempValue).getText();
     }
     async higtTemp(feelsLikeTempValue) {
        return await $(highTempValue).getText();
     }
    /**
     * Generic function to type a webElement
     * Input: locator, data
     */
     async typeInWebElement(locator, data) {
     const element = await this.findWebElement(locator);
     await element.setValue(data);
     }


    }