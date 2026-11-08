import {test,expect} from '@playwright/test';

import { SignUpPage } from '../pages/SignUpPage';


test("new user signup",async({page})=>{
const signup=new SignUpPage(page);
// await signup.fillUsername("test890");
// await signup.fillPassword("test890");
// await signup.userSignUp();
signup.gotoPage();
signup.navigateToSignUpPage();
let message=await signup.signUp("test890","test890");
console.log(message);
page.waitForTimeout(10000);


})