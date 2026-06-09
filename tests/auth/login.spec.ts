import { test, expect } from "../../fixtures/auth.fixture";
import { LoginPage } from "../../pages/user/login";

test("WEB01-002 > Verify the primary successful workflow for Login.", async ({
  guestPage,
}) => {
  const loginPage = new LoginPage(guestPage);
  await loginPage.gotoUserLogin();
  await loginPage.login("phuc100662@donga.edu.vn", "Phuc2406!");
  await loginPage.verifyLoginSuccess();
});

test("WEB01-003 > Verify Login rejects missing, malformed, out-of-range, or non-whitelisted input.", async ({
  guestPage,
}) => {
  const loginPage = new LoginPage(guestPage);
  await loginPage.gotoUserLogin();
  // Login rejects missing input
  await loginPage.login("", "");
  await loginPage.verifyEmailValidationMessage("Please fill out this field.");
  // Inavlid email
  await loginPage.login("invalid", "");
  await loginPage.verifyEmailValidationMessage(
    "Please include an '@' in the email address. 'invalid' is missing an '@'.",
  );
  // Missing password
  await loginPage.login("phuc100662@donga.edu.vn", "");
  await loginPage.verifyPasswordValidationMessage(
    "Please fill out this field.",
  );
  // Invalid email/password
  await loginPage.login("invalid@example.com", "invalidpassword");
  await loginPage.verifyErrorMessage();
});
