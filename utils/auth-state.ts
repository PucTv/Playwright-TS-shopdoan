import { chromium } from "@playwright/test";
import fs from "fs";

export async function getAuthState(role: "user" | "admin") {
  const file = `storage/${role}.json`;

  // Nếu đã có session thì dùng lại
  if (fs.existsSync(file)) {
    return file;
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // USER
    if (role === "user") {
      await page.goto("https://shopdoan-ui-user.vercel.app/auth/signin");

      await page.fill('//*[@id="email"]', "phuc100662@donga.edu.vn");

      await page.fill('//*[@id="password"]', "Phuc2406!");

      await page.click('button[type="submit"]');

      await page.waitForURL("**/");
    }

    // ADMIN
    if (role === "admin") {
      await page.goto("https://shopdoan-ui-admin.vercel.app/auth/signin");

      await page.fill("#admin-signin_email", "root@system.com");

      await page.fill("#admin-signin_password", "Root@123456");

      await page.click('button[type="submit"]');

      // chờ login thành công
      await page.waitForURL("**/");
    }

    // lưu session
    await context.storageState({
      path: file,
    });

    return file;
  } finally {
    await context.close();
    await browser.close();
  }
}
