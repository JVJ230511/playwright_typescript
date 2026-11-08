import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';

test("user login to the application",async({page})=>{
    let loginPage=new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.fillUsername("test890");
    await loginPage.fillPassword("test890");
    await loginPage.userLogin();
    await page.waitForTimeout(10000);
    
})