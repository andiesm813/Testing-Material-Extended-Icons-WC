import { expect } from '@open-wc/testing';
import Page2 from './page2.js';

describe('Page2', () => {
  it('<app-page2> is an instance of Page2', async () => {
    const element = document.createElement('app-page2');
    expect(element).to.be.instanceOf(Page2);
  });
});
