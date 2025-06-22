import { Page } from '@playwright/test';

export class SearchPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.bing.com', { waitUntil: 'networkidle' });
    try {
      await this.page.click('button:has-text("Accept")', { timeout: 5000 });
    } catch {
      // Cookie banner not found
    }
  }

  async search(term: string) {
    await this.page.fill('input[name="q"]', term);
    await this.page.keyboard.press('Enter');
    await this.page.waitForSelector('#b_results', { timeout: 15000 });
  }

  async getFirstResultText() {
    return this.page.locator('#b_results h2').first().textContent();
  }
}