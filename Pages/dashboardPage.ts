import {test, expect, Locator, Page} from "@playwright/test";

export class dashboardPage {
    page: Page;
    equity: Locator;
    debt: Locator;
    gold: Locator;
    assetAllocation: Locator;

    constructor(page:Page){
        this.page = page;
        this.equity = page.getByText('Equity60%');
        this.debt = page.getByText("Debt20%");
        this.gold = page.getByText("Gold10%");
        this.assetAllocation =page.getByText('Asset Allocation');
    }   
    async validateequityvalue(){
        await this.equity.isVisible();
    }
    async validatedebtvalue(){
        await this.debt.isVisible();
    }
    async validategoldvalue(){
        await this.gold.isVisible();
    }
    async validateassetallocationheaderDisplayed(){
        await expect(this.assetAllocation).toBeVisible();
    }
    
}