import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent, IgcAvatarComponent);

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
    .row-layout {
      display: flex;
    }
    .group {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-primary-800));
      border-width: 0px 0px 3px;
      border-style: solid;
      z-index: 1;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      left: 0;
      top: 0;
      position: sticky;
      padding: 16px 32px;
      height: max-content;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      width: max-content;
      height: max-content;
      flex-shrink: 0;
    }
    .h6 {
      margin: 0 16px 0 0;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .avatar {
      --background: none;
    }
    .icon-button {
      margin: 0 8px 0 0;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .view-container {
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <div class="row-layout group_1">
          <h6 class="h6">
            Rapid Fission Inc.
          </h6>
          <igc-button variant="flat" @click="${() => Router.go('/home')}" class="button">
            Home
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" @click="${() => Router.go('/my-info')}" class="button">
            My Info
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button">
            People
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button">
            My Files
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="row-layout group_2">
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons">
              notifications
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
        </div>
      </div>
      <router-outlet class="view-container"></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
