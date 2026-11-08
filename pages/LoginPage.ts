import {expect, Locator, Page,test} from '@playwright/test';

export class LoginPage{
    private readonly page:Page;
    private readonly username:Locator;
    private readonly password:Locator;
    private readonly loginBtn:Locator;
    private readonly loginLink:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.loginLink=this.page.locator('#login2');
        this.username=this.page.locator('#loginusername');
        this.password=this.page.locator('#loginpassword');
        this.loginBtn=this.page.getByRole("button",{name:'Log in'});

    }
    async gotoLoginPage()
    {
        await this.page.goto("https://www.demoblaze.com/index.html");
        await this.loginLink.click();
        
    }
    async fillUsername(username:string)
    {
        
        await this.username.fill(username);
    }
    async fillPassword(password:string)
    {
        
        await this.password.fill(password);
    }
    async userLogin()
    {
        console.log(await this.loginBtn.isVisible())
        await this.loginBtn.click();
        
    }
}