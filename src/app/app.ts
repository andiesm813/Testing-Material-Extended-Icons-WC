import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcNavDrawerComponent);

@customElement('app-root')
export default class App extends LitElement {
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
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
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
          <igc-nav-drawer-header-item>
            <div slot="content">Header</div>
          </igc-nav-drawer-header-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/page1`)}">
            <span slot="icon">
              <span class="imx-icon imx-usa-party-democratic icon"></span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Material Ext Icon</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/page2`)}">
            <span slot="icon">
              <span class="material-icons icon">
                dashboard
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Nav Item 2</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/page3`)}">
            <span slot="icon">
              <span class="material-icons icon">
                home
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Nav Item 3</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <router-outlet class="view-container"></router-outlet>
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

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
