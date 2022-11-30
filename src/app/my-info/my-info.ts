import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent, IgcSelectComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcAvatarComponent, IgcInputComponent, IgcSelectComponent);

@customElement('app-my-info')
export default class MyInfo extends LitElement {
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
      background-color: hsla(var(--ig-primary-700));
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      height: 144px;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      width: 960px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_2 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 32px 0 0;
      width: 200px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      min-height: min-content;
    }
    .group_6 {
      background-color: hsla(var(--ig-gray-100));
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 960px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_8 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 16px 32px 0;
      width: 200px;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_9 {
      border-color: hsla(var(--ig-gray-200));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      min-width: 50px;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 8px;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_11 {
      border-color: hsla(var(--ig-gray-300));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      min-width: 50px;
    }
    .group_12 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 8px;
      height: max-content;
      min-width: 50px;
      flex-shrink: 0;
    }
    .group_13 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 32px;
      padding: 16px;
      min-width: 50px;
      flex-grow: 1;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
    }
    .group_15 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
    }
    .group_16 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 32px;
      min-width: 50px;
    }
    .group_17 {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-300));
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 8px;
      min-width: 50px;
      min-height: min-content;
    }
    .image {
      object-fit: cover;
      border-radius: 50%;
      width: 112px;
      height: 112px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .content {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: hsla(var(--ig-primary-500));
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      margin: 0 8px 0 0;
    }
    .content_1 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .avatar {
      --background: none;
      margin: 0 8px 0 0;
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      margin: 0 8px 0 0;
    }
    .text_2 {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .icon_2 {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    .text_3 {
      color: hsla(var(--ig-gray-500));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .user-input_1 {
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .input {
      margin: 0 8px 0 0;
      width: 484px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .input_1 {
      margin: 0 8px 0 0;
      width: 97px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .input_2 {
      width: 216px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .user-input_2::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-primary-400));
    }
    .user-input_3::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .user-input_4::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .user-input_5::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .user-input_6::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .user-input_7::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .user-input_8::part(base) {
      color: hsla(var(--ig-surface-500));
    }
  `;

  @property()
  private value: string = 'Erin';

  @property()
  private value1: string = 'First name';

  @property()
  private value2: string = 'Brockovich';

  @property()
  private value3: string = '123 Wallaby Lane';

  @property()
  private value4: string = 'Scramento';

  @property()
  private value5: string = 'CA';

  @property()
  private value6: string = '94203';

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <div class="row-layout group_1">
          <div class="row-layout group_2">
            <img src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar6.png" class="image" />
          </div>
          <div class="column-layout group_3">
            <div class="column-layout group_4">
              <h4 class="content">
                Erin Brockovich
              </h4>
              <p class="typography__subtitle-1 content">
                Water Quality Specialist
              </p>
            </div>
            <div class="row-layout group_5">
              <igc-button variant="flat" class="user-input user-input_2">
                personal
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="flat" class="user-input user-input_3">
                job
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="flat" class="user-input user-input_4">
                time-off
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="flat" class="user-input user-input_5">
                emergency
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="flat" class="user-input user-input_6">
                documents
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="flat" class="user-input user-input_7">
                benefits
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="flat" class="user-input user-input_8">
                pay info
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
        </div>
      </div>
      <div class="row-layout group_6">
        <div class="row-layout group_7">
          <div class="column-layout group_8">
            <div class="column-layout group_9">
              <p class="typography__subtitle-2 text">
                Hire Date
              </p>
              <p class="typography__body-2 text_1">
                Feb 01, 2010
              </p>
              <p class="typography__caption text_1">
                10y-10m-7d
              </p>
            </div>
            <div class="column-layout group_9">
              <div class="row-layout group_10">
                <span class="material-icons icon">
                  waves
                </span>
                <p class="typography__body-2 content_1">
                  Waste water mgmt.
                </p>
              </div>
              <div class="row-layout group_10">
                <span class="material-icons icon">
                  domain
                </span>
                <p class="typography__body-2 content_1">
                  Nuclear Disposal
                </p>
              </div>
              <div class="row-layout group_10">
                <span class="material-icons icon">
                  location_on
                </span>
                <p class="typography__body-2 content_1">
                  California, USA
                </p>
              </div>
            </div>
            <div class="column-layout group_11">
              <p class="typography__subtitle-2 text">
                Manager
              </p>
              <div class="row-layout group_12">
                <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar1.png" size="small" shape="circle" class="avatar"></igc-avatar>
                <p class="typography__body-2 content_1">
                  Donni Darko
                </p>
              </div>
            </div>
          </div>
          <div class="column-layout group_13">
            <div class="row-layout group_14">
              <span class="material-icons icon_1">
                perm_contact_calendar
              </span>
              <h6 class="content_1">
                Personal
              </h6>
            </div>
            <p class="typography__subtitle-1 text_2">
              Basic Information
            </p>
            <div class="row-layout group_15">
              <igc-input .value="${this.value}" label="First name" ?disabled="${true}" ?outlined="${true}" class="user-input_1"></igc-input>
              <igc-input .value="${this.value1}" label="Middle name" ?disabled="${true}" ?outlined="${true}" class="user-input_1"></igc-input>
              <igc-input .value="${this.value2}" label="Last name" ?disabled="${true}" ?outlined="${true}" class="user-input"></igc-input>
            </div>
            <div class="row-layout group_15">
              <igc-select ?outlined="${true}" label="Gender" value="2" class="user-input_1">
                <igc-select-item value="1">
                  Male
                </igc-select-item>
                <igc-select-item value="2" ?selected="${true}">
                  Female
                </igc-select-item>
                <igc-select-item value="3">
                  It's complicated
                </igc-select-item>
              </igc-select>
              <igc-select ?outlined="${true}" label="Marital status" class="user-input">
                <igc-select-item value="1">
                  Married
                </igc-select-item>
                <igc-select-item value="1">
                  Single
                </igc-select-item>
              </igc-select>
            </div>
            <div class="row-layout group_15">
              <igc-input .value="${this.value3}" label="Address" ?required="${true}" ?outlined="${true}" class="input"></igc-input>
            </div>
            <div class="row-layout group_16">
              <igc-input .value="${this.value4}" label="City" ?required="${true}" ?outlined="${true}" class="user-input_1"></igc-input>
              <igc-input .value="${this.value5}" label="State" ?required="${true}" ?outlined="${true}" class="input_1"></igc-input>
              <igc-input type="number" .value="${this.value6}" label="Zip/Postal Code" ?required="${true}" ?outlined="${true}" class="user-input"></igc-input>
            </div>
            <p class="typography__subtitle-1 text_2">
              Contact
            </p>
            <div class="row-layout group_16">
              <igc-input type="tel" label="Home phone" ?outlined="${true}" class="user-input_1">
                <span slot="prefix">
                  <span class="material-icons icon_2">
                    home
                  </span>
                </span>
              </igc-input>
              <igc-input type="tel" label="Work phone" ?outlined="${true}" class="user-input_1">
                <span slot="prefix">
                  <span class="material-icons icon_2">
                    domain
                  </span>
                </span>
              </igc-input>
              <igc-input type="tel" label="Mobile phone" ?outlined="${true}" class="input_2">
                <span slot="prefix">
                  <span class="material-icons icon_2">
                    person
                  </span>
                </span>
              </igc-input>
            </div>
          </div>
        </div>
      </div>
      <div class="row-layout group_17">
        <p class="typography__body-2 text_3">
          (c) 2020 IndigoDesign Inc.
        </p>
      </div>
    `;
  }
}
