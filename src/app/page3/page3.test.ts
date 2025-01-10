import { expect } from '@open-wc/testing';
import Page3 from './page3.js';

describe('Page3', () => {
  it('<app-page3> is an instance of Page3', async () => {
    const element = document.createElement('app-page3');
    expect(element).to.be.instanceOf(Page3);
  });
});
