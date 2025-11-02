import {test} from "@playwright/test";
import {LandingPage} from "../pages/landingPage";

let landingPage: LandingPage;
test.beforeEach(async ({page}) => {
    landingPage = new LandingPage(page);
    await landingPage.navigateToLandingPage();
    await landingPage.enterZipCode("46340")
    await landingPage.clickNextButton();
    await landingPage.verifyWhyYouAreInterestedMessageShown();
    await landingPage.pickInterests('Safety');
    await landingPage.clickNextButton();
    await landingPage.pickTypeOfProperty('Rental Property');
    await landingPage.clickNextButton();
    await landingPage.enterName("Test Playwright");
    await landingPage.enterEmail("sometest@gmail.com");
    await landingPage.clickGoToEstimate();
})
test("Phone number doesn't accept less than 10 digits", async ({page}) => {
    await landingPage.enterPhone("12345678");
    await landingPage.clickSubmitYourRequestButton();
    await landingPage.verifyErrorMessage("Wrong phone number.");
})
test("Phone number doesn't accept more than 10 digits and cut the rest", async ({page}) => {
    await landingPage.enterPhone("2345678912333");
    await landingPage.verifyPhoneFieldValue("(234)567-8912");
    await landingPage.clickSubmitYourRequestButton();
    await landingPage.verifyThankYouPageShown();
})
test("Phone number doesn't accept empty field", async ({page}) => {
    await landingPage.enterPhone("");
    await landingPage.clickSubmitYourRequestButton();
    await landingPage.verifyErrorMessage("Enter your phone number.");

})
