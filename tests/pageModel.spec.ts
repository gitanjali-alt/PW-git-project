import {test, expect} from '@playwright/test';
import{dashboardPage} from '../Pages/dashboardPage';

test ('Validate Value In Dashboard Page', async ({page})=>{
    await page.goto('https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/index.html');
    
    let DashboardPage = new dashboardPage(page);

    await DashboardPage.validateequityvalue();
    await DashboardPage.validatedebtvalue();
    await DashboardPage.validategoldvalue();
    await DashboardPage.validateassetallocationheaderDisplayed();
});