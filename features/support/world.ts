import { Browser, BrowserContext, chromium, Page } from '@playwright/test';
import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { SearchPage } from '../../pages/search.page';

export class CustomWorld extends World {
  context!: BrowserContext;
  page!: Page;
  searchPage!: SearchPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    const browser = await chromium.launch({ 
      headless: false,
      args: ['--disable-blink-features=AutomationControlled']
    });
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.searchPage = new SearchPage(this.page);
  }
}

setWorldConstructor(CustomWorld);