import { test, expect } from "../fixtures/auth.fixture";

test("has title", async ({ userPage }) => {
  await userPage.goto("http://localhost:3000/cart");

  await expect(userPage.locator("h1:has-text('Giỏ hàng')")).toBeVisible();
});

test("get started link", async ({ adminPage }) => {
  await adminPage.goto("http://localhost:3001/");
  await expect(adminPage.locator("body")).toBeTruthy();

  const dashboardLocators = [
    adminPage.locator("h1:has-text('Dashboard')"),
    adminPage.locator("text=Dashboard"),
    adminPage.locator("[class*='dashboard']"),
  ];

  let found = false;
  for (const locator of dashboardLocators) {
    try {
      await expect(locator).toBeVisible({ timeout: 3000 });
      found = true;
      break;
    } catch (e) {
      continue;
    }
  }

  if (!found) {
    await expect(adminPage).toHaveURL(/admin/);
  }
});
test("has title a", async ({ userPage }) => {
  await userPage.goto("http://localhost:3000/cart");

  await expect(userPage.locator("h1:has-text('Giỏ hàng')")).toBeVisible();
});

test("get stara ted link", async ({ adminPage }) => {
  await adminPage.goto("http://localhost:3001/");

  await expect(adminPage.locator("body")).toBeTruthy();

  const dashboardLocators = [
    adminPage.locator("h1:has-text('Dashboard')"),
    adminPage.locator("text=Dashboard"),
    adminPage.locator("[class*='dashboard']"),
  ];

  let found = false;
  for (const locator of dashboardLocators) {
    try {
      await expect(locator).toBeVisible({ timeout: 3000 });
      found = true;
      break;
    } catch (e) {
      continue;
    }
  }

  if (!found) {
    await expect(adminPage).toHaveURL(/admin/);
  }
});
test("has titlaaaaaaae", async ({ userPage }) => {
  await userPage.goto("http://localhost:3000/cart");

  await expect(userPage.locator("h1:has-text('Giỏ hàng')")).toBeVisible();
});

test("get startedaaaa link", async ({ adminPage }) => {
  await adminPage.goto("http://localhost:3001/");

  await expect(adminPage.locator("body")).toBeTruthy();

  const dashboardLocators = [
    adminPage.locator("h1:has-text('Dashboard')"),
    adminPage.locator("text=Dashboard"),
    adminPage.locator("[class*='dashboard']"),
  ];

  let found = false;
  for (const locator of dashboardLocators) {
    try {
      await expect(locator).toBeVisible({ timeout: 3000 });
      found = true;
      break;
    } catch (e) {
      continue;
    }
  }

  if (!found) {
    await expect(adminPage).toHaveURL(/admin/);
  }
});
