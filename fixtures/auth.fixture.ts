import { test as base, expect, Page } from "@playwright/test";
import { getAuthState } from "../utils/auth-state";

type AuthFixtures = {
  userPage: Page;
  adminPage: Page;
  guestPage: Page;
};

export const test = base.extend<AuthFixtures>({
  userPage: async ({ browser }, use) => {
    const state = await getAuthState("user");

    const context = await browser.newContext({
      storageState: state,
    });

    const page = await context.newPage();

    await use(page);

    await context.close();
  },

  adminPage: async ({ browser }, use) => {
    const state = await getAuthState("admin");

    const context = await browser.newContext({
      storageState: state,
    });

    const page = await context.newPage();

    await use(page);

    await context.close();
  },

  guestPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: undefined,
    });

    const page = await context.newPage();

    await use(page);

    await context.close();
  },
});

export { expect };
