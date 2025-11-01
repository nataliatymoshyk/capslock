import {test} from "@playwright/test";
import {LandingPage} from "../pages/landingPage";


test("Zip code field is required and expected 5 digits", async ({page}) => {

    let landingPage: LandingPage;
    landingPage = new LandingPage(page);
    await landingPage.navigateToLandingPage();
    await landingPage.clickNextButton();
    await landingPage.verifyErrorMessage("Enter your ZIP code.");
});

test("Zip code field accepts only 5 digits", async ({page}) => {
    let landingPage: LandingPage;
    landingPage = new LandingPage(page);
    await landingPage.navigateToLandingPage();
    await landingPage.enterZipCode("123")
    await landingPage.clickNextButton();
    await landingPage.verifyErrorMessage("Wrong ZIP code.");
    await landingPage.enterZipCode("123456"); //TODO soft assert
    await landingPage.clickNextButton();
    await landingPage.verifyErrorMessage("Wrong ZIP code.");
})

test("Only valid email is accepted", async ({page}) => {
    let landingPage: LandingPage;
    landingPage = new LandingPage(page);
    await landingPage.navigateToLandingPage();
    await landingPage.enterZipCode("46340")
    await landingPage.clickNextButton();
    await landingPage.verifyWhyYouAreInterestedMessageShown();
    await landingPage.pickInterests();// TODO
    await landingPage.clickNextButton();
    await landingPage.pickTypeOfProperty(); //TODO
    await landingPage.clickNextButton();
    await landingPage.enterName("Test Playwright");
    await landingPage.enterEmail("invalidEmail");
    await landingPage.clickGoToEstimate();
    await landingPage.wrongEmailAlertIsShown();

})


