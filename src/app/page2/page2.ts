import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-page2')
export default class Page2 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .h1 {
      text-align: center;
      height: max-content;
      min-width: min-content;
      align-self: center;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <h1 class="h1">
        Page 2
      </h1>
    `;
  }
}
