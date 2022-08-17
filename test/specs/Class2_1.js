describe ('Verify login form', () => {

   it('Verify Email and password fields', async () => {
     await browser.url('https://www.facebook.com/');

     await browser.pause(2000);

     const emailInputBox = await $('#email');
     const isEmailInputEnabled = await emailInputBox.isEnabled();
     expect(isEmailInputEnabled, 'Email input box is not enabled').to.be.true;


     const pwInputBox = await $ ('#pass');
     const isPwdInputEnabled = await pwInputBox.isEnabled();
     expect(isPwdInputEnabled, 'Password input bix is not enabled').to.be.true;

     await emailInputBox.setvalue('aaaa@ abc.com');

     await browser.pause(2000);

     await pwInputBox.setvalue('aa12123');

     await browser.pause(2000);
    });

    it('Verify login button default state', () =>{
        await browser.url ('https://www.facebook.com/');
    })


    });
