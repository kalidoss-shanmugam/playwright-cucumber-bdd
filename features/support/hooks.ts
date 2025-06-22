import { After, Before, Status } from '@cucumber/cucumber';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      path: `reports/screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}.png`,
      fullPage: true
    });
    this.attach(screenshot, 'image/png');
  }
  await this.page.close();
  await this.context.close();
});