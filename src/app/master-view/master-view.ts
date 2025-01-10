import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcNavDrawerComponent, IgcButtonComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .navbar {
      height: max-content;
      min-width: min-content;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      max-width: 320px;
      flex-shrink: 0;
    }
    .nav-drawer::part(main) {
      width: 320px;
    }
    .h6 {
      margin: 0;
      flex-shrink: 0;
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
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
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .button::part(base) {
      background-color: var(--ig-secondary-100);
    }
  `;

  @query('#nav-drawer')
  private navDrawer?: IgcNavDrawerComponent;

  render() {
    return html`
      <link href='node_modules/@igniteui/material-icons-extended/styles/sprite.css' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <igc-icon-button slot="start" variant="flat" @click="${() => this.navDrawer?.toggle()}">
          <span class="material-icons">
            menu
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <div class="row-layout group">
          <h6 class="h6">
            Testing Material Extended Icons
          </h6>
        </div>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            search
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            favorite
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            more_vert
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
      </igc-navbar>
      <div class="row-layout group_1">
        <igc-nav-drawer ?open="${true}" position="relative" id="nav-drawer" class="nav-drawer">
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="imx-icon imx-usa-party-democratic icon"></span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Material Ext Icon</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="material-icons icon">
                dashboard
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Nav Item 2</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="material-icons icon">
                home
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Nav Item 3</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <div class="row-layout group_2">
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
        <igc-nav-drawer position="relative" class="nav-drawer">
          <div slot="mini">
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  account_circle
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  dashboard
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  home
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
          </div>
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Nav Item 1</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="material-icons icon">
                dashboard
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Nav Item 2</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="material-icons icon">
                home
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Nav Item 3</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
      </div>
    `;
  }
}
