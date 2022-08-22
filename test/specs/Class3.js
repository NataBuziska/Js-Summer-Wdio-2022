/** To get the text of a webElement
*/

describe('', () =>{
const loginButton = await $ ('button[data-testid*=l_l')
const logingBtnText = await loginButton.getText()

expect (logingBtnText, 'Login in button')
})