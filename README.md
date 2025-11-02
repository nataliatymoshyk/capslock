# Installation
To install the test on local machine, follow the steps below:

1. Clone this repository (`git clone git@github.com:nataliatymoshyk/capslock.git`)
2. Run `npm install` to install dependencies to local folder with cloned project
3. Run `npx playwright install` to install the necessary browsers
4. Run `npx playwright test` to execute the tests

# Test cases
Based on aim of the page, the most critical scenarios are about data collection to be used for further contact with customer - email, phone and zip code.
To make sure user provide correct data I have focused on validation of these fields.
To make test scalable and reliable we cannot add all field validation in one test, so each validation is done as separate test which makes it is easy to change, maintain and read.

So, based on requirements I have  created  11 tests.

1) if error  shown in case user enters incorrect zip code (less than 5 digits, more than 5 digits, and empty field) - 3 tests
2) if error shown in case user enters less than 10 digits, more than 10 digits, and when field is empty. - 4 tests
3) if error shown in case user leaves email field  empty or email is in wrong format - 3 tests
4) happy path scenario when all fields are filled correctly and user can proceed further without errors - 1 test.


