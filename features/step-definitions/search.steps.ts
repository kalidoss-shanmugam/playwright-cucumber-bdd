import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I navigate to the search page', async function (this: CustomWorld) {
  await this.searchPage.navigate();
});

When('I search for {string}', async function (this: CustomWorld, term: string) {
  await this.searchPage.search(term);
});

Then('I should see results containing {string}', 
  async function (this: CustomWorld, text: string) {
    const result = await this.searchPage.getFirstResultText();
    expect(result?.toLowerCase()).toContain(text.toLowerCase());
  });