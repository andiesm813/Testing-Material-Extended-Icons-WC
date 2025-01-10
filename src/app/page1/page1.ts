import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcIconComponent, IgcIconButtonComponent, IgcRippleComponent, IgcButtonComponent);

@customElement('app-page1')
export default class Page1 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .button::part(base) {
      background-color: var(--ig-secondary-100);
    }
  `;

  render() {
    return html`
      <link href='node_modules/@igniteui/material-icons-extended/styles/sprite.css' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <span class="material-icons icon">
          mail
        </span>
        <span class="imx-icon imx-coronavirus icon"></span>
        <igc-icon-button variant="flat">
          <span class="material-icons">
            ac_unit
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-button type="button" class="button">
          <span class="imx-icon imx-drop-shipping"></span>
          <span>Button</span>
          <igc-ripple></igc-ripple>
        </igc-button>
      </div>
    `;
  }
}
