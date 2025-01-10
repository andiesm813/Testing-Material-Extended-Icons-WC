import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './page1/page1';
import './page2/page2';
import './page3/page3';

export const routes: Route[] = [
  { path: '', component: 'app-page1', name: 'Page1' },
  { path: 'page1', component: 'app-page1', name: 'Page1' },
  { path: 'page2', component: 'app-page2', name: 'Page2' },
  { path: 'page3', component: 'app-page3', name: 'Page3' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
