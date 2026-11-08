 import { Page ,Locator} from '@playwright/test';
export class SignUpPage {

    // Define properties

   private readonly page: Page;
   private readonly signUpLink:Locator;
   private readonly usernameInput:Locator;
   private readonly passwordInput:Locator;
   private readonly signUpButton :Locator;

   //Initialize page context and elements
    constructor(page: Page) {
        this.page = page;
        this.signUpLink=this.page.locator('#signin2')
        this.usernameInput = this.page.locator('#sign-username');
        this.passwordInput = this.page.locator('#sign-password');
        this.signUpButton = this.page.getByRole('button',{name:"Sign up"});

    }
//create reuseable actions
    async gotoPage()
    {
        await this.page.goto("https://www.demoblaze.com/index.html");
    }
    async navigateToSignUpPage()
    {
        await this.signUpLink.click();
    }
    
    async fillUsername(username:string)
    {
        await this.usernameInput.clear();
        await this.usernameInput.fill(username);
    }
    async fillPassword(password:string)
    {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }
    async userSignUp()
    {
        await this.signUpButton.click();
    }


    async signUp(username:string,password:string):Promise<string>{
        
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        const dialogPromise=this.page.waitForEvent('dialog');
        await this.signUpButton.click();
        const dialog=await dialogPromise;
        const message=dialog.message();
        await dialog.accept();
        return message;
    }


 }



