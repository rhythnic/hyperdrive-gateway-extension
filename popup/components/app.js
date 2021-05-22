import { LitElement, html, css } from 'lit';
import SlForm from '@shoelace-style/shoelace/dist/components/form/form.js';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';

export class App extends LitElement {
  static get styles() {
    return css`
      main {
        margin-right: 1rem;
      }
      sl-button {
        margin-top: 0.5rem;
      }
    `;
  }

  static get properties() {
    return {
      name: { hyperdriveUri: String }
    }
  }

  constructor() {
    super();
    this.hyperdriveUri = '';
  }

  render() {
    return html`
      <main>
        <sl-form class="server-uri" @sl-submit=${this.openHyperdriveUri}>
          <sl-input name="uri" label="Hyperdrive link", value=${this.hyperdriveUri}></sl-input>
          <sl-button size="small" pill submit>Open</sl-button>
        </sl-form>
      </main>
    `;
  }

  openHyperdriveUri (event) {
    this.hyperdriveUri = event.detail.formData.get('uri');
    const hyperdriveGateWayUrl = 'http://localhost:8085/hyper';
    const linkRegex = /hyper:\/\/([^ ]+)/;
    const hyperdriveGatewayUri = this.hyperdriveUri
      .replace(linkRegex, (_, pubKeyAndPath) => `${hyperdriveGateWayUrl}/${pubKeyAndPath}`)
    window.open(hyperdriveGatewayUri, "_blank");
  }
}

customElements.define('app-root', App);