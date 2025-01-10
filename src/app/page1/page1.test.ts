import { expect } from '@open-wc/testing';
import Page1 from './page1.js';

describe('Page1', () => {
  it('<app-page1> is an instance of Page1', async () => {
    const element = document.createElement('app-page1');
    expect(element).to.be.instanceOf(Page1);
  });
});
