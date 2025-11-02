import {expect, Page} from "@playwright/test";

export class LandingPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLandingPage() {
        await this.page.goto("https://test-qa.capslock.global/"); //TODO config
    }

    async enterZipCode(zipCode: string) {
        await this.page.locator('#form-container-1').getByRole('textbox', {name: 'Enter ZIP Code'})
            .fill(zipCode);
    }

    async clickNextButton() {
        await this.page.locator('#form-container-1').getByRole('button', {name: 'Next '}).click();
        ``
    }

    async verifyErrorMessage(expectedMessage: string) {
        const errorMessage = this.page.getByText(expectedMessage);
        await errorMessage.waitFor();
    }

    async pickInterests(interest: string) {
        // await this.page.locator('i').nth(2).click();
        await this.page.locator('#form-container-1').getByText(interest).click();
        //  await page.locator('#form-container-1').getByRole('button', { name: 'Next ' }).click();

    }


    async pickTypeOfProperty(propertyType: string ) {
        await this.page.locator('#form-container-1').getByText(propertyType).click();
    }

    async enterName(name: string) {
        await this.page.locator('#form-container-1').getByRole('textbox', {name: 'Enter Your Name'})
            .fill(name);
    }

    async enterEmail(email: string) {
        await this.page.locator('#form-container-1').getByRole('textbox', {name: 'Enter Your Email'})
            .fill(email);
    }

    async wrongEmailAlertIsShown() {
        const msg = await this.page.$eval('input[name="email"]', el => (el as HTMLInputElement).validationMessage);
        expect(msg.length).toBeGreaterThan(0);

    }

    async clickGoToEstimate() {
        await this.page.locator('#form-container-1').getByRole('button', {name: 'Go To Estimate'})
            .click()
    }

    async enterPhone(phone: string) {
        await this.page.locator('#form-container-1').getByRole('textbox', {name: '(XXX)XXX-XXXX'}).fill(phone)
    }

    async verifyPhoneFieldValue(expectedValue: string) {
        const phoneField = this.page.locator('#form-container-1').getByRole('textbox', {name: '(XXX)XXX-XXXX'});
        await expect(phoneField).toHaveValue(expectedValue);
    }

    async clickSubmitYourRequestButton() {
        await this.page.locator('#form-container-1').getByRole('button', {name: 'Submit'}).click();
    }

    async verifyWhyYouAreInterestedMessageShown() {
        const message = this.page.getByText("Why are you interested in a walk-in tub?").first();
        await message.waitFor();
        await (expect(message)).toBeVisible();
    }

    async verifyThankYouPageShown() {
        const message = this.page.getByRole('heading', {name: 'Thank you!'})
        await message.waitFor();
        await (expect(message)).toBeVisible();
    }
}
