#Installation
To install the test on local machine, follow the steps below:

1. Clone this repository (`git clone git@github.com:nataliatymoshyk/capslock.git`)
2. Run `npm install` to install dependencies to local folder with cloned project
3. Run `npx playwright install` to install the necessary browsers
4. Run `npx playwright test` to execute the tests

#Test cases
Based on aim of the page, the most critical scenarios are about data collection to be used for further contact with customer - email, phone and zip code.
So, based on requirements I have tested:
1)if error  shown in case user enters incorrect zip code (less than 5 digits, more than 5 digits, and empty field).
2) if error shown in case user enters less than 10 digits, more than 10 digits, and when field is empty.
3) if error showns in case user leaves email field  empty or email is in wrong format

To make test scalable and reliable we cannot add all field validation in one test, so each validation is done as separate test which makes it is easy to change, maintain and read.

Additionaly, happy path (end-to-end) scenario was created to make sure user can complete his journey without errors if he enters correct data.

