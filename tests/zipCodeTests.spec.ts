import {test} from "@playwright/test";
import {LandingPage} from "../pages/landingPage";

let landingPage: LandingPage;
test.beforeEach(async ({page}) => {
    landingPage = new LandingPage(page);
    await landingPage.navigateToLandingPage();
})


test("Zip code field is required", async ({page}) => {
    await landingPage.enterZipCode("")
    await landingPage.clickNextButton();
    await landingPage.verifyErrorMessage("Enter your ZIP code.");
});
test("Zip code field doesn't accept less than 5 digits", async ({page}) => {
    await landingPage.enterZipCode("123")
    await landingPage.clickNextButton();
    await landingPage.verifyErrorMessage("Wrong ZIP code.");
})
test("Zip code field doesn't accept more than 5 digits", async ({page}) => {
    await landingPage.enterZipCode("123456");
    await landingPage.clickNextButton();
    await landingPage.verifyErrorMessage("Wrong ZIP code.");
})

