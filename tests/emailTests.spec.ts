import {test} from "@playwright/test";
import {LandingPage} from "../pages/landingPage";

let landingPage: LandingPage;
test.beforeEach(async ({page}) => {
    landingPage = new LandingPage(page);
    await landingPage.navigateToLandingPage();
    await landingPage.navigateToLandingPage();
    await landingPage.enterZipCode("46340")
    await landingPage.clickNextButton();
    await landingPage.verifyWhyYouAreInterestedMessageShown();
    await landingPage.pickInterests('Independence');
    await landingPage.clickNextButton();
    await landingPage.pickTypeOfProperty('Owned House / Condo');
    await landingPage.clickNextButton();
})

test("Error message shown if invalid email entered", async ({page}) => {
    await landingPage.enterName("Test Playwright");
    await landingPage.enterEmail("invalidEmail");
    await landingPage.clickGoToEstimate();
    await landingPage.wrongEmailAlertIsShown();
})
test("Error message shown if email empty", async ({page}) => {
    await landingPage.enterName("Test Playwright");
    await landingPage.enterEmail("");
    await landingPage.clickGoToEstimate();
    await landingPage.wrongEmailAlertIsShown();
})
