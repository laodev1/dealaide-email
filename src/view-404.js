import {LitElement,html} from 'lit';
class View404 extends LitElement {
	render() {
		return html`
			<h1>404</h1>
			<p>
                Page not found.
                <a href="/">Return to Home</a>
			</p>
		`;
	}
}

customElements.define('view-404', View404);