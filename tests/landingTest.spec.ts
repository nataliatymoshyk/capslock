import {test} from "@playwright/test";
import {LandingPage} from "../pages/landingPage";

let landingPage: LandingPage;
test.beforeEach(async ({page}) => {
    landingPage = new LandingPage(page);
    await landingPage.navigateToLandingPage();
})

test('User enters correct all data and Thank you page is shown', async ({page}) => {
    await landingPage.enterZipCode("46340")
    await landingPage.clickNextButton();
    await landingPage.verifyWhyYouAreInterestedMessageShown();
    await landingPage.pickInterests('Therapy');
    await landingPage.clickNextButton();
    await landingPage.pickTypeOfProperty('Mobile home');
    await landingPage.clickNextButton();
    await landingPage.enterName("Test Playwright");
    await landingPage.enterEmail("sometest@gmail.com");
    await landingPage.clickGoToEstimate();
    await landingPage.enterPhone("2345678910");
    await landingPage.clickSubmitYourRequestButton();
    await landingPage.verifyThankYouPageShown();
})



